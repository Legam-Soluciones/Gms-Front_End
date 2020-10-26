<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-hover v-slot:default="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="700"
          max-width="500"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            <h3>Búsqueda de Clientes</h3>
            <br />
            <v-divider></v-divider>
            <v-card class="mx-auto" max-width="500" tile> </v-card>
            <template>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="apellido1"
                        label="Nombre, Apellido o Email"
                        filled
                        :counter="counterEn ? counter : true"
                        shaped
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="large"
                        label="Identificación"
                        filled
                        shaped
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-container id="dropdown-example-3">
                    <v-overflow-btn
                      class="my-2"
                      :items="dropdown_edit"
                      label="Con saldo mayor a (¢)"
                      item-value="text"
                    ></v-overflow-btn>
                  </v-container>

                  <v-container fluid>
                    <v-row>
                      <v-col cols="12 ">
                        <v-combobox
                          v-model="select"
                          :items="items2"
                          label="--Tipo de identificación--"
                          filled
                          dense
                        ></v-combobox>
                      </v-col>
                    </v-row>
                  </v-container>

                  <br />

                  <v-btn outlined color="success">
                    <v-icon left>
                      replay
                    </v-icon>
                    Limpiar
                  </v-btn>
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
    items2: [
      "Cédula de identidad ",
      "Cédula jurídica",
      "DIMEX",
      "Extranjero",
      "NITE"
    ],
    dropdown_edit: [
      { text: "¢5000 - ¢10.000" },
      { text: "¢10.000 - ¢25.000" },
      { text: "¢25.000 - ¢50.000" },
      { text: "¢50.000 - ¢75.000" },
      { text: "¢75.000 - ¢100.000" },
      { text: "¢100.000 - ¢150.000" },
      { text: "¢150.000 - ¢200.000" },
      { text: "¢200.000 - ¢250.000" }
    ],
    counter: 50,
    nombre1: "",
    nombre2: "",
    apellido1: "",
    apellido2: "",
    item: 1,
    items: [
      { text: "Ejemplo-1", icon: "flag" },
      { text: "Ejemplo-2", icon: "flag" },
      { text: "Ejemplo-3", icon: "flag" }
    ]
  })
};
</script>
