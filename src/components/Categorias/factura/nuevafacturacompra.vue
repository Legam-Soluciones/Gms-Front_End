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
                  <p class="text-uppercase">Nueva Factura de Compra</p>
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
                        label="Proveedor"
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
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Moneda"
                        outlined
                        readonly
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <v-divider></v-divider>
                <tablanuevafactura msg="Welcome to Your Vue.js App" />

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
                    height="475"
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

                <template>
                  <div>
                    <v-checkbox
                      v-model="v1"
                      label="Referenciar otra factura de compra para ser anulada"
                    ></v-checkbox>
                    <v-banner
                      v-model="v1"
                      single-line
                      transition="slide-y-transition"
                    >
                      <v-row>
                        <v-col cols="12" sm="12">
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
                            label="Clave de la factura a referenciar (50 dígitos)"
                            placeholder="Digita el número aquí"
                            counter="50"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="12">
                          <v-text-field
                            ref="address"
                            v-model="address"
                            :rules="[
                              () => !!address || 'Este campo es requerido',
                              () =>
                                (!!address && address.length <= 100) ||
                                'La cantidad de digitos debe ser igual o menor a 100',
                              addressCheck
                            ]"
                            label="Razón de la referencia"
                            placeholder="Digita tu razón aquí"
                            counter="100"
                            required
                          ></v-text-field>
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

export default {
  components: {
    tablanuevafactura
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
  })
};
</script>
