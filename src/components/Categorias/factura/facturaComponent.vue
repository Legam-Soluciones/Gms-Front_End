<template>
  <v-row>
    <v-col cols="12 " md="12">
      <v-container>
        <v-card class="overflow-hidden">
          <v-app-bar
            absolute
            color="#6A76AB"
            dark
            shrink-on-scroll
            prominent
            src="https://picsum.photos/1920/1080?random"
            fade-img-on-scroll
            scroll-target="#scrolling-techniques-4"
          >
            <template v-slot:img="{ props }">
              <v-img
                v-bind="props"
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
              ></v-img>
            </template>

            <v-toolbar-title> Finanzas - Nueva Factura </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>monetization_on</v-icon>
            </v-btn>

            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="yellow" v-bind="attrs" v-on="on">
                  <v-icon>scatter_plot</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <template v-slot:extension>
              <v-tabs align-with-title>
                <div class="text-center">
                  <v-btn @click="finanzas()" text large color="white"
                    >Nueva Factura</v-btn
                  >
                </div>
                <div class="text-center">
                  <v-btn @click="prefactura()" text large color="white"
                    >Pre Factura</v-btn
                  >
                </div>
                <div class="text-center">
                  <v-btn @click="factura()" text large color="white"
                    >Facturas</v-btn
                  >
                </div>
                <div class="text-center">
                  <v-btn @click="clientes()" text large color="white"
                    >Clientes</v-btn
                  >
                </div>
                <div class="text-center">
                  <v-btn @click="recepcion()" text large color="white"
                    >Recepción</v-btn
                  >
                </div>
                <div class="text-center">
                  <v-btn @click="presupuesto()" text large color="white"
                    >Presupuestos</v-btn
                  >
                </div>
                <div class="text-center">
                  <v-btn @click="facturacompra()" text large color="white"
                    >Factura Compra</v-btn
                  >
                </div>
                <div class="text-center">
                  <v-btn @click="proveedores()" text large color="white"
                    >Proveedores</v-btn
                  >
                </div>
              </v-tabs>
            </template>
          </v-app-bar>
          <v-sheet
            id="scrolling-techniques-4"
            class="overflow-y-auto"
            max-height="1000"
          >
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <v-container>
              <v-row>
                <v-col cols="4" sm="3">
                  <p class="text-uppercase">Nueva Factura</p>
                  <v-combobox
                    v-model="select"
                    :items="items1"
                    label="Tipo"
                    outlined
                    dense
                  ></v-combobox>
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
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Paciente"
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Sucursal"
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Cliente"
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Moneda"
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Exoneración"
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <v-divider></v-divider>
                <tablanuevafactura msg="Welcome to Your Vue.js App" />
                <template>
                  <div>
                    <v-checkbox
                      color="green"
                      v-model="v0"
                      label="Medios de pagos múltiples"
                    ></v-checkbox>
                    <v-banner
                      v-model="v0"
                      single-line
                      transition="slide-y-transition"
                    >
                      <template>
                        <v-form>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6">
                                <v-text-field
                                  label="Tarjeta"
                                  hint="Pon aquí el monto de la tarjteta a efectuar"
                                  persistent-hint
                                  outlined
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" sm="6">
                                <v-combobox
                                  v-model="select"
                                  :items="items3"
                                  label="Datáfono"
                                  outlined
                                  dense
                                ></v-combobox>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" sm="6">
                                <v-text-field
                                  label="Efectivo"
                                  hint="Pon aquí la cantidad de efectivo a pagar"
                                  persistent-hint
                                  outlined
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" sm="6">
                                <v-text-field
                                  label="Transferencia"
                                  hint="Pon aquí la cantidad de la trasnferencia a efectuar"
                                  persistent-hint
                                  outlined
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" sm="6">
                                <v-text-field
                                  label="Cheque"
                                  hint="Pon aquí la cantidad del chepe a efectuar"
                                  persistent-hint
                                  outlined
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" sm="6">
                                <v-text-field
                                  label="Total pagado ¢"
                                  hint="Monto total pagado"
                                  persistent-hint
                                  outlined
                                  disabled
                                ></v-text-field>
                              </v-col>

                              <v-col cols="12" sm="6">
                                <v-text-field
                                  label="Faltante ¢"
                                  hint="Monto total faltante"
                                  persistent-hint
                                  outlined
                                  disabled
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-form>
                      </template>
                      <template v-slot:actions="{ dismiss }">
                        <v-btn text color="red" @click="dismiss"
                          >Cancelar</v-btn
                        >
                      </template>
                    </v-banner>
                  </div>
                </template>

                <v-container fluid>
                  <v-row>
                    <v-col cols="6">
                      <v-combobox
                        v-model="select"
                        :items="items2"
                        label="Medio de Pago Único"
                        filled
                        dense
                      ></v-combobox>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </template>
            <v-row align="center" justify="center">
              <v-col cols="12">
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
                <br />
                <v-divider></v-divider>
                <template>
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" sm="6">
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
                <template>
                  <div>
                    <v-checkbox
                      v-model="v0"
                      label="Información de referencia"
                    ></v-checkbox>
                    <v-banner
                      v-model="v0"
                      single-line
                      transition="slide-y-transition"
                    >
                      <v-text-field
                        ref="address"
                        v-model="address"
                        :rules="[
                          () => !!address || 'Este campo es requerido',
                          () =>
                            (!!address && address.length <= 50) ||
                            'La cantidad de digitos debe ser igual o menor a 50',
                          addressCheck
                        ]"
                        label="Número"
                        placeholder="Digita tu número por favor"
                        counter="50"
                        required
                      ></v-text-field>
                      <br />
                      <v-text-field
                        ref="name"
                        v-model="name"
                        :rules="[() => !!name || 'Este campo es requerido']"
                        :error-messages="errorMessages"
                        label="Razón"
                        placeholder="Digita aquí tu razón por favor"
                        required
                      ></v-text-field>
                      <template v-slot:actions="{ dismiss }">
                        <v-btn text color="red" @click="dismiss"
                          >Cancelar</v-btn
                        >
                      </template>
                    </v-banner>
                  </div>
                </template>
                <template>
                  <div>
                    <v-checkbox
                      v-model="v1"
                      label="Referenciar Contingencia"
                    ></v-checkbox>
                    <v-banner
                      v-model="v1"
                      single-line
                      transition="slide-y-transition"
                    >
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            ref="address"
                            v-model="address"
                            :rules="[
                              () => !!address || 'Este campo es requerido',
                              () =>
                                (!!address && address.length <= 50) ||
                                'La cantidad de digitos debe ser igual o menor a 50',
                              addressCheck
                            ]"
                            label="Número de comprobante de contingencia*"
                            placeholder="Digita el número aquí"
                            counter="50"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                          <v-text-field
                            ref="address"
                            v-model="address"
                            :rules="[
                              () => !!address || 'Este campo es requerido',
                              () =>
                                (!!address && address.length <= 50) ||
                                'La cantidad de digitos debe ser igual o menor a 50',
                              addressCheck
                            ]"
                            label="Razón de contingencia*"
                            placeholder="Escribe aquí"
                            counter="50x"
                            required
                          ></v-text-field>
                          <fechafactura />
                          <tiempofactura />
                        </v-col>
                      </v-row>
                      <template v-slot:actions="{ dismiss }">
                        <v-btn text color="red" @click="dismiss"
                          >Cancelar</v-btn
                        >
                      </template>
                    </v-banner>
                  </div>
                </template>
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
import tablanuevafactura from "@/components/Categorias/factura/tablanuevafactura.vue";
import fechafactura from "@/components/Categorias/factura/fechafactura.vue";
import tiempofactura from "@/components/Categorias/factura/tiempofactura.vue";

export default {
  components: {
    tablanuevafactura,
    fechafactura,
    tiempofactura
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
