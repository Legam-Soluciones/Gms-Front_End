<template>
  <v-dialog max-height="1200px" width="700px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined color="primary" dark v-bind="attrs" v-on="on">
        Crear Expedientes
      </v-btn>
    </template>
    <v-card max-height="1200px" width="800px">
      <v-container>
        <v-form>
          <v-text-field
            v-model="PrimerNombre"
            type="text"
            label="Primer Nombre"
          ></v-text-field>
          <v-text-field
            v-model="SegundoNombre"
            type="text"
            label="Segundo Nombre"
          ></v-text-field>
          <v-text-field
            v-model="PrimerApellido"
            type="text"
            label="Primer Apellido"
          ></v-text-field>
          <v-text-field
            v-model="SegundoApellido"
            type="text"
            label="Segundo Apellido"
          ></v-text-field>
          <v-select
            :items="[
              'Cédula de Identidad',
              'Extranjero',
              'DIMEX',
              'Menor de Edad'
            ]"
            label="Seleccionar Identificación"
            v-model="IDTipoIdentificacion"
          ></v-select>
          <v-text-field
            v-model="NumeroIdentificacion"
            type="number"
            label="Identificación"
          ></v-text-field>
          <v-select
            :items="['Femenino', 'Masculino', 'No especifica']"
            label="Género"
            v-model="Genero"
          ></v-select>
          <v-text-field
            v-model="FechaNacimiento"
            type="date"
            label="Fecha de nacimiento"
          ></v-text-field>
          <v-text-field
            v-model="Edad"
            type="number"
            label="Edad"
          ></v-text-field>
          <v-text-field
            v-model="Telefono1CodigoPais"
            type="number"
            label="Código de país"
          ></v-text-field>
          <v-text-field
            v-model="Telefono1"
            type="number"
            label="Teléfono"
          ></v-text-field>
          <v-text-field
            v-model="Telefono2CodigoPais"
            type="number"
            label="Código de país 2"
          ></v-text-field>
          <v-text-field
            v-model="Telefono2"
            type="number"
            label="Teléfono secundario"
          ></v-text-field>
          <v-text-field
            v-model="Email"
            type="text"
            label="Correo Electrónico"
          ></v-text-field>
          <v-btn color="primay" class="mr-4" @click="addExpediente"
            >Crear Expediente</v-btn
          >
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { db } from "@/main";
export default {
  data() {
    return {
      PrimerNombre: null,
      SegundoNombre: null,
      PrimerApellido: null,
      SegundoApellido: null,
      IDTipoIdentificacion: null,
      NumeroIdentificacion: null,
      Genero: null,
      FechaNacimiento: null,
      Edad: null,
      Telefono1CodigoPais: null,
      Telefono2CodigoPais: null,
      Telefono1: null,
      Telefono2: null,
      Email: null,
      Saldo: "0,00000",
      NombreConvenio: "",
      dialog: false
    };
  },
  methods: {
    async addExpediente() {
      try {
        await db.collection("Expedientes1").add({
          PrimerNombre: this.PrimerNombre,
          SegundoNombre: this.SegundoNombre,
          PrimerApellido: this.PrimerApellido,
          SegundoApellido: this.SegundoApellido,
          IDTipoIdentificacion: this.IDTipoIdentificacion,
          NumeroIdentificacion: this.NumeroIdentificacion,
          Genero: this.Genero,
          FechaNacimiento: this.FechaNacimiento,
          Edad: this.Edad,
          Telefono1CodigoPais: this.Telefono1CodigoPais,
          Telefono2CodigoPais: this.Telefono2CodigoPais,
          Telefono1: this.Telefono1,
          Telefono2: this.Telefono2,
          Email: this.Email,
          Saldo: this.Saldo,
          NombreConvenio: this.NombreConvenio
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
