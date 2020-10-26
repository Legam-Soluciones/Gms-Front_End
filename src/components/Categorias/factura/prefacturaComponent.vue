<template>
  <v-row>
    <v-col cols="12" md="12">
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

            <v-toolbar-title> Pre Facturas </v-toolbar-title>

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
            <prefacturabuscador />

            <v-container style="height: 1000px;"></v-container>
          </v-sheet>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import prefacturabuscador from "@/components/Categorias/factura/prefacturabuscador.vue";
export default {
  components: {
    prefacturabuscador
  },
  data: () => ({
    items: [
      { title: " Prueba 1 " },
      { title: " Prueba 2" },
      { title: " Prueba 3" },
      { title: " Prueba 4" }
    ]
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
