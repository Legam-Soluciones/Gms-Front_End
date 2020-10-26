<template>
  <v-card>
    <v-card-title>
      Prefacturación de clientes
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Nombre del paciente"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
    <div class="text-center">
      <v-btn outlined color="primary" dark>
        Actualizar
      </v-btn>
    </div>
    <br />
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Primer Apellido", value: "ap1" },
        { text: "Segundo Apellido", value: "ap2" },
        { text: "Teléfono", value: "tel" },
        { text: "Cédula", value: "ced" },
        { text: "Ubicación", value: "zona" }
      ],
      desserts: [
        {
          name: "Jose Pablo",
          ap1: 159,
          ap2: 6.0,
          tel: 24,
          ced: 4.0,
          zona: "1%"
        },
        {
          name: "Raquel",
          ap1: 159,
          ap2: 6.0,
          tel: 24,
          ced: 4.0,
          zona: "1%"
        },
        {
          name: "Mario",
          ap1: 159,
          ap2: 6.0,
          tel: 24,
          ced: 4.0,
          zona: "1%"
        }
      ]
    };
  }
};
</script>
