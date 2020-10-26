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
            <buscarrecepcionComponent />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <buzonrecepcionComponent />
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
import buscarrecepcionComponent from "@/components/Categorias/factura/buscarrecepcionComponent.vue";
import buzonrecepcionComponent from "@/components/Categorias/factura/buzonrecepcionComponent.vue";

export default {
  components: {
    buscarrecepcionComponent,
    buzonrecepcionComponent
  }
};
</script>
