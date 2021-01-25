<!-- Este archivo es el menú de la página de estadísticas. Al hacer click en su respectivo icono, cambia lo que se muestra en el v-tab
mediante los componentes importados en la carpeta de estadísticas.-->
<template>
  <v-row>
    <v-col cols="12 " md="12">
      <v-container>
        <v-card>
          <v-toolbar
            flat
            color="grey lighten-3"
            dark
            class="mx-auto"
            max-width="6000"
          >
            <v-toolbar-title></v-toolbar-title>
          </v-toolbar>
          <v-tabs vertical>
            <v-tab>
              <v-icon left>
                source
              </v-icon>
              Expedientes
            </v-tab>
            <v-tab>
              <v-icon left>
                article
              </v-icon>
              Agenda
            </v-tab>
            <v-tab>
              <v-icon left>
                monetization_on
              </v-icon>
              Ingresos
            </v-tab>
            <v-tab>
              <v-icon left>
                south
              </v-icon>
              Gastos
            </v-tab>
            <v-tab>
              <v-icon left>
                payments
              </v-icon>
              IVA
            </v-tab>
            <v-tab>
              <v-icon left>
                assignment
              </v-icon>
              Reportes
            </v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <expedientesEstadisticas />
                  <br /><br /><br /><br />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <asistenciaEstadisticas />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <facturacionEstadisticas />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <gastosEstadisticas />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="font-weight-black text-center">IVA de compra</p>
                  <ivacomprasEstadisticas />
                  <br /><br />

                  <p class="font-weight-black text-center">IVA ventas</p>
                  <ivaventasEstadisticas />
                  <br /><br />

                  <p class="font-weight-black text-center">
                    Monto de IVA devuelto agrupado por mes
                  </p>
                  <ivadevueltoEstadisticas />
                  <br /><br />

                  <p class="font-weight-black text-center">
                    IVA ventas vs IVA compras agrupado por mes
                  </p>
                  <ivaVsEstadisticas />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <reportesEstadisticas />
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import expedientesEstadisticas from "@/components/Categorias/Estadisticas/expedientesEstadisticas.vue";

import asistenciaEstadisticas from "@/components/Categorias/Estadisticas/asistenciaEstadisticas.vue";

import facturacionEstadisticas from "@/components/Categorias/Estadisticas/facturacionEstadisticas.vue";

import gastosEstadisticas from "@/components/Categorias/Estadisticas/gastosEstadisticas.vue";

import ivacomprasEstadisticas from "@/components/Categorias/Estadisticas/ivacomprasEstadisticas.vue";
import ivadevueltoEstadisticas from "@/components/Categorias/Estadisticas/ivadevueltoEstadisticas.vue";
import ivaventasEstadisticas from "@/components/Categorias/Estadisticas/ivaventasEstadisticas.vue";
import ivaVsEstadisticas from "@/components/Categorias/Estadisticas/ivaVsEstadisticas.vue";

import reportesEstadisticas from "@/components/Categorias/Estadisticas/Reportes/reportesEstadisticas.vue";

export default {
  components: {
    expedientesEstadisticas,

    asistenciaEstadisticas,

    facturacionEstadisticas,

    gastosEstadisticas,

    ivacomprasEstadisticas,
    ivadevueltoEstadisticas,
    ivaventasEstadisticas,
    ivaVsEstadisticas,

    reportesEstadisticas
  }
};
</script>
