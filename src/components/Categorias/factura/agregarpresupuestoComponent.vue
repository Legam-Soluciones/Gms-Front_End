<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-container>
        <v-card class="overflow-hidden">
          <v-sheet
            id="scrolling-techniques-4"
            class="overflow-y-auto"
            max-height="1000"
          >
            <br />
            <v-container>
              <v-row>
                <v-col cols="4" sm="3">
                  <h2>Nuevo Presupuesto</h2>
                </v-col>
              </v-row>
            </v-container>
            <v-divider></v-divider>

            <template>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Compañia"
                        prepend-icon="location_city"
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Paciente"
                        prepend-icon="mood"
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Sucursal"
                        prepend-icon="domain"
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Cliente"
                        prepend-icon="group "
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Moneda"
                        prepend-icon="local_atm "
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <fechaPresupuestoComponent />
                    </v-col>
                  </v-row>
                </v-container>
                <v-divider></v-divider>
                <tablaPresupuestoComponent msg="Welcome to Your Vue.js App" />
              </v-form>
            </template>

            <v-divider></v-divider>

            <v-row align="center" justify="center">
              <v-col cols="12">
                <template>
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" sm="12">
                        <v-textarea
                          filled
                          auto-grow
                          label="Nota de Pago"
                          rows="4"
                          row-height="25"
                          shaped
                          counter="1000x"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </template>

                <v-hover v-slot:default="{ hover }" disabled>
                  <v-card
                    :elevation="hover ? 12 : 2"
                    class="mx-auto"
                    height="650"
                    max-width="350"
                  >
                    <v-card-text class="my-4 text-center title">
                      Detalles de Monto
                    </v-card-text>

                    <template>
                      <v-form>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                value="Subtotal"
                                label="Regular"
                                disabled
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                value="Descuento"
                                label="Regular"
                                disabled
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                value="I.V.A"
                                label="Regular"
                                disabled
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                value="TOTAL ¢"
                                label="Regular"
                                disabled
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                value="I.V.A Descuento"
                                label="Regular"
                                disabled
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                value="Total a Cobrar ¢"
                                label="Regular"
                                disabled
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                    </template>
                    <br /><br />
                  </v-card>
                </v-hover>
                <br /><br /><br />
                <template>
                  <div class="text-center">
                    <v-btn class="ma-2" outlined color="light-blue"
                      >Guardar</v-btn
                    >
                  </div>
                </template>
              </v-col>
            </v-row>
            <v-container style="height: 1000px;"></v-container>
          </v-sheet>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import tablaPresupuestoComponent from "@/components/Categorias/factura/tablaPresupuestoComponent.vue";
import fechaPresupuestoComponent from "@/components/Categorias/factura/fechaPresupuestoComponent.vue";

export default {
  components: {
    fechaPresupuestoComponent,
    tablaPresupuestoComponent
  },

  data: () => ({
    v0: false,
    v1: false,
    items: [
      { title: "Factura" },
      { title: "Prefactura" },
      { title: "Clientes" },
      { title: "Recepción" },
      { title: "check" }
    ],
    items1: ["Crédito", "Contado", "Otro"],
    items2: ["Efectivo", "Tarjeta", "Cheque", "Transferencia / Deposito"],
    items3: ["BAC CREDOMATIC", "PROMERICA"]
  }),

  methods: {
    finanzas() {
      this.$router.push({ name: "finanzas" });
    },
    prefactura() {
      this.$router.push({ name: "prefactura" });
    },
    factura() {
      this.$router.push({ name: "factura" });
    },
    clientes() {
      this.$router.push({ name: "clientes" });
    },
    recepcion() {
      this.$router.push({ name: "recepcion" });
    },
    presupuesto() {
      this.$router.push({ name: "presupuesto" });
    },
    facturacompra() {
      this.$router.push({ name: "facturacompra" });
    },
    proveedores() {
      this.$router.push({ name: "proveedores" });
    }
  }
};
</script>
