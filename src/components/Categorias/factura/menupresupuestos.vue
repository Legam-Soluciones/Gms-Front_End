<template>
  <v-card>
    <v-toolbar flat color="grey lighten-3" dark>
      <v-toolbar-title></v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          source
        </v-icon>
        Comprobantes Recibidos
      </v-tab>
      <v-tab>
        <v-icon left>
          add_circle
        </v-icon>
        Buzón de Recepción
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <agregarpresupuestoComponent />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <buscadorpresupuestosComponent />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text> </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import agregarpresupuestoComponent from "@/components/Categorias/factura/agregarpresupuestoComponent.vue";
import buscadorpresupuestosComponent from "@/components/Categorias/factura/buscadorpresupuestosComponent.vue";

export default {
  components: {
    agregarpresupuestoComponent,
    buscadorpresupuestosComponent
  }
};
</script>
