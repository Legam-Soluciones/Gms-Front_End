<template>
  <v-row>
    <v-col cols="12" sm="12">
      <v-hover v-slot:default="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="1025"
          max-width="700"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            <h3>Búsqueda de Proveedores</h3>
            <br />
            <v-divider></v-divider>
            <v-card class="mx-auto" max-width="900" tile> </v-card>
            <template>
              <v-form>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="Nombre"
                      label="Nombre"
                      filled
                      shaped
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="d-flex" cols="12" sm="12">
                    <v-select
                      :items="items4"
                      label="--Todas las categorías--"
                      filled
                      shaped
                    ></v-select>
                  </v-col>
                </v-row>

                <v-container fluid>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="12">
                      <boton1Component />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="12">
                      <boton2Component />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="12">
                      <boton3Component />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="12">
                      <boton4Component />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="12">
                      <boton5Component />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="12">
                      <boton6Component />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="12">
                      <boton7Component />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="12">
                      <boton8Component />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="12">
                      <boton9Component />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="12">
                      <boton10Component />
                    </v-col>
                  </v-row>
                </v-container>

                <br /><br />
              </v-form>
            </template>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import boton1Component from "@/components/Categorias/Estadisticas/Reportes/boton1Component.vue";
import boton2Component from "@/components/Categorias/Estadisticas/Reportes/boton2Component.vue";
import boton3Component from "@/components/Categorias/Estadisticas/Reportes/boton3Component.vue";
import boton4Component from "@/components/Categorias/Estadisticas/Reportes/boton4Component.vue";
import boton5Component from "@/components/Categorias/Estadisticas/Reportes/boton5Component.vue";
import boton6Component from "@/components/Categorias/Estadisticas/Reportes/boton6Component.vue";
import boton7Component from "@/components/Categorias/Estadisticas/Reportes/boton7Component.vue";
import boton8Component from "@/components/Categorias/Estadisticas/Reportes/boton8Component.vue";
import boton9Component from "@/components/Categorias/Estadisticas/Reportes/boton9Component.vue";
import boton10Component from "@/components/Categorias/Estadisticas/Reportes/boton10Component.vue";

export default {
  components: {
    boton1Component,
    boton2Component,
    boton3Component,
    boton4Component,
    boton5Component,
    boton6Component,
    boton7Component,
    boton8Component,
    boton9Component,
    boton10Component
  },
  data: () => ({
    counter: 50,
    nombre1: "",
    numdooc: "",
    item: 1,

    items4: [
      " Agenda ",
      "Consultas ",
      "Facturación ",
      "General ",
      "Inventarios ",
      "Pacientes "
    ]
  })
};
</script>
