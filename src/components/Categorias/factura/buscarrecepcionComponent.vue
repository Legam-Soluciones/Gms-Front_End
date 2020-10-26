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
            <h3>Búsqueda de Comprobantes Recibidos</h3>
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
                        label="Nombre del proveedor"
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
                        label="Número del documento"
                        filled
                        shaped
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <fecharecepcionComponent />

                  <v-container fluid>
                    <v-row>
                      <v-col class="d-flex" cols="12" sm="12">
                        <v-select
                          :items="items2"
                          label="--Centro Médico--"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>

                  <v-container fluid>
                    <v-row>
                      <v-col class="d-flex" cols="12" sm="12">
                        <v-select
                          :items="items3"
                          label="--Sucursal--"
                        ></v-select>
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

            <tablarecepcion />
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import fecharecepcionComponent from "@/components/Categorias/factura/fecharecepcionComponent.vue";
import tablarecepcion from "@/components/Categorias/factura/tablarecepcion.vue";

export default {
  components: {
    fecharecepcionComponent,
    tablarecepcion
  },
  data: () => ({
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
    ],
    items2: ["Clínica Médica Más Salud & Salud LTDA"],
    items3: [
      "Cañas",
      "Centro Médico San Isidro",
      "Cuidad Neily, Centro Médico y Farmacia San Pedro",
      "Guácimo, Centro Médico Vitaliza",
      "Guápiles ",
      "Hospital Cooperativo, frente al Hospital de San Carlos",
      "Liberia, Clinica San Marino ",
      "Puntarenas, ALGARA Centro Médico y Dental ",
      "San Ramón, Clínica Phillips ",
      "Santa Cruz de Guanacaste, Centro Médico Santa Cruz ",
      "Turrialba, Centro Médico Arias y Soto ",
      "Uruca "
    ]
  })
};
</script>
