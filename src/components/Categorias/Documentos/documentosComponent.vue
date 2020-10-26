<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-hover v-slot:default="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="875"
          max-width="500"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            <h3>Documentos</h3>
            <br />
            <v-divider></v-divider>
            <v-card class="mx-auto" max-width="500" tile>
              <v-list flat>
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
            <template>
              <br />
              <h3>Expedientes</h3>
              <v-divider></v-divider>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="first"
                        label="Nombre"
                        outlined
                        shaped
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="last"
                        label="Apellido"
                        filled
                        shaped
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="large"
                        label="Profesional"
                        filled
                        shaped
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </template>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" sm="6">
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="700"
          max-width="1000"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            Especifica los valores para realizar la búsqueda en la columna de la
            izquierda
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    first: "",
    last: "",
    item: 1,
    items: [
      { text: "CONSENTIMIENTO INFORMADO", icon: "insert_drive_file" },
      { text: "Consentimiento Informado", icon: "insert_drive_file" },
      {
        text: "Consentimiento informado mesoterapia",
        icon: "insert_drive_file"
      },
      { text: "Justificante Médico", icon: "insert_drive_file" },
      {
        text: "Consentimiento informado PRP capilar",
        icon: "insert_drive_file"
      },
      { text: "REINTEGRO DE IVA", icon: "insert_drive_file" },
      { text: "Consentimiento PRP facial", icon: "insert_drive_file" },
      {
        text: "Consentimiento informado disminución de estrías",
        icon: "insert_drive_file"
      },
      { text: "Consentimiento informado Uvuplastia", icon: "insert_drive_file" }
    ]
  })
};
</script>
