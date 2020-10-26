<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-hover v-slot:default="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="1025"
          max-width="500"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            <h3>Búsqueda de Facturas</h3>
            <br />
            <v-divider></v-divider>
            <v-card class="mx-auto" max-width="500" tile> </v-card>
            <template>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="nombre1"
                        label="Nombre del Paciente o Cliente"
                        filled
                        :counter="counterEn ? counter : true"
                        shaped
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12 ">
                      <v-text-field
                        v-model="numdooc"
                        label="Numero Documento"
                        filled
                        :counter="counterEn ? counter : true"
                        shaped
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <fechafactura />

                  <v-container fluid>
                    <v-row>
                      <v-col class="d-flex" cols="12" sm="12">
                        <v-select
                          :items="items6"
                          label="--CLÍNICA MÉDICA--"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>

                  <v-container fluid>
                    <v-row>
                      <v-col class="d-flex" cols="12" sm="12">
                        <v-select
                          :items="items2"
                          label="--Sucursales--"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-container fluid>
                    <v-row>
                      <v-col class="d-flex" cols="12" sm="12">
                        <v-select
                          :items="items3"
                          label="--Estados de pago--"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-container fluid>
                    <v-row>
                      <v-col class="d-flex" cols="12" sm="12">
                        <v-select
                          :items="items4"
                          label="--Estados de Hacienda--"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-container fluid>
                    <v-row>
                      <v-col class="d-flex" cols="12" sm="12">
                        <v-select
                          :items="items5"
                          label="--Usuarios--"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>

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
          height="1025"
          max-width="1000"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            <tablafactura />
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import fechafactura from "@/components/Categorias/factura/fechafactura.vue";
import tablafactura from "@/components/Categorias/factura/tablafactura.vue";

export default {
  components: {
    fechafactura,
    tablafactura
  },
  data: () => ({
    counter: 50,
    nombre1: "",
    numdooc: "",
    item: 1,
    items: [
      { text: "Ejemplo-1", icon: "flag" },
      { text: "Ejemplo-2", icon: "flag" },
      { text: "Ejemplo-3", icon: "flag" }
    ],
    items2: [
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
    ],
    items3: ["Pagados", "No Pagados"],
    items4: ["Aceptados por Hacienda", "Rechazados por Hacienda"],
    items5: [
      "Ventas",
      "Shirleny Suarez",
      "Jose Pablo Esquivel",
      "Melany Riatiga",
      "Paola Moncada Plata"
    ],
    items6: ["CLÍNICA MÉDICA MÁS SALUD & SALUD LTDA"]
  })
};
</script>
