<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="teal" tile outlined v-bind="attrs" v-on="on">
          Agregar Cita a la Agenda
        </v-btn>
      </template>
      <v-card ref="form">
        <v-card-title>
          <span class="headline"> Agregar Nueva Cita </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Nombre Paciente"
                  v-model="nombre"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label=" Teléfono "
                  v-model="telefono"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Doctor/a:"
                  hint="Persona que realizará el procedimiento"
                  persistent-hint
                  required
                  v-model="doctor"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Correo Eléctronico"
                  v-model="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label=" Confirmada / No Confirmada "
                  v-model="confirmacion"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Edad de Paciente*"
                  required
                  v-model="edad"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
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
                  v-model="procedimientos"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Agregue una fecha"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" locale="es-CR"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-container>
          <small>* Por Favor llenar todos los espacios *</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1">Cerrar</v-btn>
          <!-- @click="dialog = false" -->
          <v-btn color="blue darken-1" text @click="submit">Agregar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import db from "@/fb";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export default {
  data() {
    return {
      nombre: "",
      telefono: "",
      doctor: "",
      email: "",
      confirmacion: "",
      edad: "",
      procedimientos: "",
      date: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    submit() {
      //  console.log(this.nombre, this.telefono, this.doctor, this.email, this.confirmacion, this.edad, this.procedimientos)
      const agenda = {
        nombre: this.nombre,
        telefono: this.telefono,
        doctor: this.doctor,
        email: this.email,
        confirmacion: this.confirmacion,
        edad: this.edad,
        procedimientos: this.procedimientos,
        date: new Date(this.date).toISOString().substr(0, 10)
      };
      db.collection("agenda")
        .add(agenda)
        .then(() => {
          console.log("Añadido a la base de datos");
        });
    }
  },
  computed: {
    formattedDate() {
      return this.date ? format(parseISO(this.date), "yyyy MMM dd") : "";
    }
  }
};
</script>
