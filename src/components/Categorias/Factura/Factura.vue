<!-- Parecido al menú de estadísticas, este archivo tiene los distintos componentes en Factura -->
<template>
  <v-container width="auto">
    <v-tabs horizontal>
      <v-tab>
        <v-icon left>
          source
        </v-icon>
        Factura
      </v-tab>
      <v-tab>
        <v-icon left>
          article
        </v-icon>
        Pre-facturas
      </v-tab>
      <v-tab>
        <v-icon left>
          monetization_on
        </v-icon>
        Facturas
      </v-tab>
      <v-tab>
        <v-icon left>
          contacts
        </v-icon>
        Clientes
      </v-tab>
      <v-tab>
        <v-icon left>
          insert_drive_file
        </v-icon>
        Recepción
      </v-tab>
      <v-tab>
        <v-icon left>
          attach_money
        </v-icon>
        Presupuesto
      </v-tab>
      <v-tab>
        <v-icon left>
          insert_comment
        </v-icon>
        Presupuestos
      </v-tab>
      <v-tab>
        <v-icon left>
          assignment
        </v-icon>
        Factura Compra
      </v-tab>
      <v-tab>
        <v-icon left>
          shopping_bag
        </v-icon>
        Proveedores
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <AddFactura />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Hola</p>
            <br /><br /><br /><br />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p><Facturas /></p>
            <br /><br /><br /><br />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Hola</p>
            <br /><br /><br /><br />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Hola</p>
            <br /><br /><br /><br />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <AddPresupuesto />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <Presupuesto />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Hola</p>
            <br /><br /><br /><br />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Hola</p>
            <br /><br /><br /><br />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import AddFactura from "@/components/Categorias/Factura/AddFactura.vue";
import Facturas from "@/components/Categorias/Factura/Facturas.vue";
import AddPresupuesto from "@/components/Categorias/Factura/AddPresupuesto.vue";
import Presupuesto from "@/components/Categorias/Factura/Presupuestos.vue";
export default {
  components: {
    AddFactura,
    Facturas,
    AddPresupuesto,
    Presupuesto
  }
};
</script>
