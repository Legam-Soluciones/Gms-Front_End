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
                  <expedientesnuevosEstadisticas />
                  <br /><br /><br /><br />

                  <p class="font-weight-black text-center">
                    Expedientes por Género %
                  </p>
                  <p class="font-weight-gray text-center">
                    Porcentaje de expedientes activos agrupados por género.
                  </p>
                  <expedientesgeneroEstadisticas />
                  <br /><br /><br /><br />

                  <p class="font-weight-black text-center">
                    Expedientes por Edad
                  </p>
                  <p class="font-weight-gray text-center">
                    Porcentaje de expedientes activos agrupados por rango de
                    edad
                  </p>
                  <expedientesedadEstadisticas />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="font-weight-black text-center">
                    Asistencia por día
                  </p>
                  <p class="font-weight-gray text-center">
                    Cantidad de citas asistidas por día de la semana.
                  </p>
                  <asistenciaEstadisticas />

                  <p class="font-weight-black text-center">
                    Asistencia por motivo
                  </p>
                  <p class="font-weight-gray text-center">
                    Citas Asignadas agrpadas por motivo.
                  </p>
                  <asistenciamotivoEstadisticas />

                  <p class="font-weight-black text-center">
                    Asistencia a citas en cantidad
                  </p>
                  <p class="font-weight-gray text-center">
                    Comparación entre las citas asistidas y las no asistidas.
                  </p>
                  <asistenciacitasEstadisticas />

                  <p class="font-weight-black text-center">
                    Asistencia a citas en %
                  </p>
                  <p class="font-weight-gray text-center">
                    Asistidas y No asistidas
                  </p>
                  <asistenciacitasporcentajeEstadisticas />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="font-weight-black text-center">
                    Facturación por periodo
                  </p>
                  <p class="font-weight-gray text-center">
                    Total de facturación mensual por periodo
                  </p>
                  <facturacionEstadisticas />

                  <p class="font-weight-black text-center">
                    Cuentas por cobrar
                  </p>
                  <p class="font-weight-gray text-center">
                    Cuentas por cobrar agrupado por sucursal
                  </p>
                  <facturacioncobrarEstadisticas />

                  <p class="font-weight-black text-center">
                    Cuentas por cobrar
                  </p>
                  <p class="font-weight-gray text-center">
                    Cuentas por cobrar agrupado por antiguedad
                  </p>
                  <facturacionantiguedadEstadisticas />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="font-weight-black text-center">
                    Monto de gastos agrupados por mes
                  </p>
                  <p class="font-weight-gray text-center">Gastos por periodo</p>
                  <gastosagrupadosEstadisticas />

                  <br /><br />
                  <v-divider></v-divider>
                  <br /><br />

                  <p class="font-weight-black text-center">
                    Monto de gastos agrupados por categoría
                  </p>
                  <p class="font-weight-gray text-center">
                    Gastos agrupados categoría
                  </p>
                  <gastoscategoriaEstadisticas />
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
import expedientesnuevosEstadisticas from "@/components/Categorias/Estadisticas/Expedientes/expedientesnuevosEstadisticas.vue";
import expedientesgeneroEstadisticas from "@/components/Categorias/Estadisticas/Expedientes/expedientesgeneroEstadisticas.vue";
import expedientesedadEstadisticas from "@/components/Categorias/Estadisticas/Expedientes/expedientesedadEstadisticas.vue";

import asistenciaEstadisticas from "@/components/Categorias/Estadisticas/Agenda/asistenciaEstadisticas.vue";
import asistenciamotivoEstadisticas from "@/components/Categorias/Estadisticas/Agenda/asistenciamotivoEstadisticas.vue";
import asistenciacitasEstadisticas from "@/components/Categorias/Estadisticas/Agenda/asistenciacitasEstadisticas.vue";
import asistenciacitasporcentajeEstadisticas from "@/components/Categorias/Estadisticas/Agenda/asistenciacitasporcentajeEstadisticas.vue";

import facturacionEstadisticas from "@/components/Categorias/Estadisticas/Ingresos/facturacionEstadisticas.vue";
import facturacioncobrarEstadisticas from "@/components/Categorias/Estadisticas/Ingresos/facturacioncobrarEstadisticas.vue";
import facturacionantiguedadEstadisticas from "@/components/Categorias/Estadisticas/Ingresos/facturacionantiguedadEstadisticas.vue";

import gastosagrupadosEstadisticas from "@/components/Categorias/Estadisticas/Gastos/gastosagrupadosEstadisticas.vue";
import gastoscategoriaEstadisticas from "@/components/Categorias/Estadisticas/Gastos/gastoscategoriaEstadisticas.vue";

import ivacomprasEstadisticas from "@/components/Categorias/Estadisticas/Iva/ivacomprasEstadisticas.vue";
import ivadevueltoEstadisticas from "@/components/Categorias/Estadisticas/Iva/ivadevueltoEstadisticas.vue";
import ivaventasEstadisticas from "@/components/Categorias/Estadisticas/Iva/ivaventasEstadisticas.vue";
import ivaVsEstadisticas from "@/components/Categorias/Estadisticas/Iva/ivaVsEstadisticas.vue";

import reportesEstadisticas from "@/components/Categorias/Estadisticas/Reportes/reportesEstadisticas.vue";

export default {
  components: {
    expedientesnuevosEstadisticas,
    expedientesgeneroEstadisticas,
    expedientesedadEstadisticas,

    asistenciaEstadisticas,
    asistenciamotivoEstadisticas,
    asistenciacitasEstadisticas,
    asistenciacitasporcentajeEstadisticas,

    facturacionEstadisticas,
    facturacioncobrarEstadisticas,
    facturacionantiguedadEstadisticas,

    gastosagrupadosEstadisticas,
    gastoscategoriaEstadisticas,

    ivacomprasEstadisticas,
    ivadevueltoEstadisticas,
    ivaventasEstadisticas,
    ivaVsEstadisticas,

    reportesEstadisticas
  }
};
</script>
