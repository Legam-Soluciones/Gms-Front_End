<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
          <!-- Botón Agregar Evento -->
          <v-btn
            outlined
            color="primary"
            dark
            class="mr-4"
            @click="dialog = true"
            >Agregar Nuevo Evento</v-btn
          >

          <v-btn outlined class="mr-4" @click="setToday">
            Hoy
          </v-btn>
          <v-btn fab text small @click="prev">
            <v-icon small>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next">
            <v-icon small>keyboard_arrow_right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn outlined v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Día</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 días</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Semana</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Mes</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :event-margin-bottom="3"
          :now="today"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>

        <!-- Formulario para agregar el evento -->
        <v-dialog v-model="dialog" max-width="500">
          <v-card>
            <v-container>
              <v-form @submit.prevent="addEvent">
                <v-text-field
                  v-model="name"
                  type="text"
                  label="Nombre del Paciente"
                ></v-text-field>
                <v-text-field
                  v-model="telefono"
                  type="text"
                  label="Teléfono"
                ></v-text-field>
                <v-text-field
                  label="Doctor/a:"
                  type="text"
                  v-model="doctor"
                ></v-text-field>
                <v-text-field
                  label="Correo Eléctronico"
                  v-model="email"
                  type="text"
                ></v-text-field>
                <v-text-field
                  label=" Confirmada / No Confirmada "
                  v-model="confirmacion"
                  type="text"
                ></v-text-field>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Edad de Paciente*"
                  v-model="edad"
                  type="text"
                ></v-select>
                <v-autocomplete
                  :items="[
                    'Dermapen',
                    'Carboxterapia',
                    'Limpieza Facial',
                    'Masaje',
                    'Desintoxicación Iónica',
                    'Termo Gimnasia',
                    'Implanon',
                    'Masaje Cervical',
                    'PRP',
                    'Relleno de Labios',
                    'Eliminación de Ronquidos',
                    'Botox',
                    'Ácido hialurónico',
                    'Eliminación de estrias'
                  ]"
                  label="Procedimientos a afectuar"
                  multiple
                  type="text"
                  v-model="procedimientos"
                ></v-autocomplete>
                <v-text-field
                  v-model="start"
                  type="datetime-local"
                  label="start"
                ></v-text-field>
                <v-text-field
                  v-model="end"
                  type="datetime-local"
                  label="end"
                ></v-text-field>
                <v-text-field
                  v-model="color"
                  type="color"
                  label="color"
                ></v-text-field>
                <v-btn
                  type="submit"
                  color="primay"
                  class="mr-4"
                  @click.stop="dialog = false"
                  >Crear Cita</v-btn
                >
              </v-form>
            </v-container>
          </v-card>
        </v-dialog>

        <!-- Este formulario tiene diferentes Models, y esto es porque los toma de la base de datos. De esa manera,
        el usuario no tendrá que digitar toda la información otra vez si solo quiere cambiar un dato.-->
        <v-dialog v-model="forms2" max-width="500">
          <v-card>
            <v-container>
              <v-form onsubmit="return false">
                <v-text-field
                  v-model="selectedEvent.name"
                  type="text"
                  label="Nombre del Paciente"
                ></v-text-field>
                <v-text-field
                  v-model="selectedEvent.telefono"
                  type="text"
                  label="Teléfono"
                ></v-text-field>
                <v-text-field
                  label="Doctor/a:"
                  type="text"
                  v-model="selectedEvent.doctor"
                ></v-text-field>
                <v-text-field
                  label="Correo Eléctronico"
                  v-model="selectedEvent.email"
                  type="text"
                ></v-text-field>
                <v-text-field
                  label=" Confirmada / No Confirmada "
                  v-model="selectedEvent.confirmacion"
                  type="text"
                ></v-text-field>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Edad de Paciente*"
                  v-model="selectedEvent.edad"
                  type="text"
                ></v-select>
                <v-autocomplete
                  :items="[
                    'Dermapen',
                    'Carboxterapia',
                    'Limpieza Facial',
                    'Masaje',
                    'Desintoxicación Iónica',
                    'Termo Gimnasia',
                    'Implanon',
                    'Masaje Cervical',
                    'PRP',
                    'Relleno de Labios',
                    'Eliminación de Ronquidos',
                    'Botox',
                    'Ácido hialurónico',
                    'Eliminación de estrias'
                  ]"
                  label="Procedimientos a afectuar"
                  multiple
                  type="text"
                  v-model="selectedEvent.procedimientos"
                ></v-autocomplete>
                <v-text-field
                  v-model="selectedEvent.start"
                  type="datetime-local"
                  label="start"
                ></v-text-field>
                <v-text-field
                  v-model="selectedEvent.end"
                  type="datetime-local"
                  label="end"
                ></v-text-field>
                <v-text-field
                  v-model="selectedEvent.color"
                  type="color"
                  label="color"
                ></v-text-field>
                <v-btn
                  type="submit"
                  color="primay"
                  class="mr-4"
                  @click.stop="forms2 = false"
                  @click="update(selectedEvent)"
                  >Actualizar Cita</v-btn
                >
                <v-btn
                  type="submit"
                  color="primay"
                  class="mr-4"
                  @click.stop="forms2 = false"
                  @click="deleted(selectedEvent)"
                >
                  Eliminar
                </v-btn>
              </v-form>
            </v-container>
          </v-card>
        </v-dialog>
        <!-- Aquí es donde se pueden ver las citas mostradas en el calenadario. Al inicio solo se ve el nombre, y el color, pero al hacer click
        se mostrarán el resto de datos correspondientes a la cita -->
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.telefono"></span>
            </v-card-text>
            <v-card-text>
              <span v-html="selectedEvent.doctor"></span>
            </v-card-text>
            <v-card-text>
              <span v-html="selectedEvent.email"></span>
            </v-card-text>
            <v-card-text>
              <span v-html="selectedEvent.confirmacion"></span>
            </v-card-text>
            <v-card-text>
              <span v-html="selectedEvent.edad"></span>
            </v-card-text>
            <v-card-text>
              <span v-html="selectedEvent.procedimientos"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                Cancelar
              </v-btn>
              <v-btn text color="secondary" @click="forms2 = true">
                Actualizar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
// Importar esta constante  "db" es lo que nos permite usar la base de datos.
import { db } from "@/main";
export default {
  //Aquí es donde se definen todas las variables.
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: "month",
    typeToLabel: {
      month: "Mes",
      week: "Semana",
      day: "Día",
      "4day": "4 Días"
    },
    start: null,
    end: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    // Adicionales...
    name: null,
    telefono: null,
    doctor: null,
    email: null,
    confirmacion: null,
    edad: null,
    procedimientos: null,
    color: "#1976D2",
    dialog: false,
    forms2: false,
    currentlyEditing: null
  }),
  computed: {
    // En la sección de computed se hacen todos los cálculos con respecto a los meses y los días. Start y End son variables
    // a las que no se les puede cambiar el nombre debido a que forman parte de esto.
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }

      const startMonth = this.monthFormatter(start);
      const endMonth = this.monthFormatter(end);
      const suffixMonth = startMonth === endMonth ? "" : endMonth;

      const startYear = start.year;
      const endYear = end.year;
      const suffixYear = startYear === endYear ? "" : endYear;

      const startDay = start.day + this.nth(start.day);
      const endDay = end.day + this.nth(end.day);

      switch (this.type) {
        case "month":
          return `${startMonth} ${startYear}`;
        case "week":
        case "4day":
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
        case "day":
          return `${startMonth} ${startDay} ${startYear}`;
      }
      return "";
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long"
      });
    }
  },
  //Created y Mounted cargan los datos de los calendarios.
  mounted() {
    this.$refs.calendar.checkChange();
  },
  created() {
    this.getEvents();
  },
  methods: {
    //Este método añade el evento a la base de datos.
    async addEvent() {
      try {
        if (this.name && this.start && this.end) {
          await db.collection("Agenda").add({
            name: this.name,
            telefono: this.telefono,
            doctor: this.doctor,
            email: this.email,
            confirmacion: this.confirmacion,
            edad: this.edad,
            procedimientos: this.procedimientos,
            start: this.start,
            end: this.end,
            color: this.color
          });
          this.getEvents();
          this.name = "";
          this.telefono = "";
          this.doctor = "";
          this.email = "";
          this.confirmacion = "";
          this.edad = "";
          this.procedimientos = "";
          this.start = "";
          this.end = "";
          this.color = "#1976D2";
        } else {
          alert("Campos obligatorios");
        }
      } catch (error) {
        console.log(error);
      }
    },
    //Este método simplemente consigue los datos de la base y los guarda en la constante "Events". Luego de ser cargada en la constante,
    //Un vector con el mismo nombre copia los datos de la misma.
    async getEvents() {
      try {
        const snapshot = await db.collection("Agenda").get();
        const events = [];
        snapshot.forEach(doc => {
          console.log(doc.data());
          let appData = doc.data();
          appData.id = doc.id;
          events.push(appData);
        });
        this.events = events;
      } catch (error) {
        console.log(error);
      }
    },
    //Este método se encarga de actualizar los datos.
    async update(selectedEvent) {
      try {
        const actualizacion = await db
          .collection("Agenda")
          .doc(selectedEvent.id);
        return actualizacion.update({
          name: selectedEvent.name,
          telefono: selectedEvent.telefono,
          doctor: selectedEvent.doctor,
          email: selectedEvent.email,
          confirmacion: selectedEvent.confirmacion,
          edad: selectedEvent.edad,
          procedimientos: selectedEvent.procedimientos,
          start: selectedEvent.start,
          end: selectedEvent.end,
          color: selectedEvent.color
        });
      } catch (error) {
        console.log(error);
      }
    },
    //Este método se encarga de borrar lso datos.
    deleted(selectedEvent) {
      db.collection("Agenda")
        .doc(selectedEvent.id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    },

    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
      this.start = start;
      this.end = end;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    }
  }
};
</script>
