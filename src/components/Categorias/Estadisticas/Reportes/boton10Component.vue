<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn block filled shaped rounded v-bind="attrs" v-on="on">
          Comprobantes Emitidos
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="#29cede">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title> Comprobantes Emitidos </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">
              Cerrar
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <br /><br /><br /><br />
        <v-card class="mx-auto" max-width="700">
          <h2 class="font-weight-black text-center">Comprobantes Emitidos</h2>
          <br />
          <p class="font-weight-gray text-center">
            Detalles de factras, tiquetes y notas de crédito emitidos en un
            periodo
          </p>

          <v-divider></v-divider>
          <br /><br />
          <v-container fluid>
            <v-row>
              <v-col cols="12 ">
                <v-combobox
                  v-model="select"
                  :items="items2"
                  label="--Todas las agendas--"
                  filled
                  dense
                ></v-combobox>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid>
            <v-row>
              <v-col cols="12 ">
                <v-combobox
                  v-model="select"
                  :items="items3"
                  label="Fecha"
                  filled
                  dense
                ></v-combobox>
              </v-col>
            </v-row>
          </v-container>
          <br />
          <fechaComponent />
          <br /><br /><br /><br /><br />
          <v-row justify="space-around">
            <v-btn rounded color="blue  undary" dark> Buscar </v-btn>
            <v-btn rounded color="green" dark> Excel </v-btn>
          </v-row>
          <br />
        </v-card>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import fechaComponent from "@/components/Categorias/Estadisticas/Reportes/fechaComponent.vue";

export default {
  components: {
    fechaComponent
  },
  data() {
    return {
      items2: [
        "Más Salud: Uruca ",
        "Más Salud: San Carlos ",
        "Más Salud: Turrialba ",
        "Más Salud: San Ramón ",
        "Más Salud: Puntarenas ",
        "SPA ",
        "Más Salud: Perez Zeledón ",
        "Más Salud: Cañas ",
        "Más Salud: Guápiles ",
        "Más Salud: Guácimo ",
        "Más Salud: Liberia ",
        "Más Salud: Cuidad Neily ",
        "Más Salud: Cuidad Neily ",
        "Santa Cruz "
      ],
      items3: [
        "Hoy",
        "Ayer ",
        "Último mes",
        "Esta semana",
        "Año anterior",
        "Este año"
      ],
      dialog: false,
      notifications: false
    };
  }
};
</script>
