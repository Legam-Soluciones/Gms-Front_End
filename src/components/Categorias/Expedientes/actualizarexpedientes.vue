<template>
  <v-dialog max-height="1200px" width="700px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        outlined
        color="primary"
        class="mt-4 mb-4"
      >
        Actualizar Expedientes
      </v-btn>
    </template>
    <v-card max-height="1200px" width="800px">
      <v-container>
        <v-form>
          <div v-for="Expediente in Expedientes" :key="Expediente.IDExpediente">
            <div>
              {{ Expediente.PrimerNombre }}
            </div>
            <v-text-field
              v-model="PrimerNombre"
              type="text"
              label="Primer Nombre"
              value="Expediente.PrimerNombre"
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
            <v-btn color="primay" class="mr-4" @click="update(Expediente)"
              >Actualizar Expediente</v-btn
            >
            <v-btn outlined color="primary" dark>Autorellenar</v-btn>
          </div>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>
