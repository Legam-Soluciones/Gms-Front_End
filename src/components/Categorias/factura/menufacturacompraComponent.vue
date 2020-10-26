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
        Lista
      </v-tab>
      <v-tab>
        <v-icon left>
          add_circle
        </v-icon>
        Nueva Factura
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <buscadorfacturacompra />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <nuevafacturacompra />
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
import buscadorfacturacompra from "@/components/Categorias/factura/buscadorfacturacompra.vue";
import nuevafacturacompra from "@/components/Categorias/factura/nuevafacturacompra.vue";

export default {
  components: {
    buscadorfacturacompra,
    nuevafacturacompra
  }
};
</script>
