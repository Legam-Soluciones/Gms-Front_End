<!-- Al igual que el archivo anterior, esta página muestra los presupuestos dependiendo del nombre o el número-->
<template>
  <v-row>
    <v-col cols="12">
      <v-card class="font-weight-medium mt-12 text-center subtitle-1">
        <h3>Búsqueda de Presupuestos</h3>
        <br />

        <v-form>
          <v-container>
            <v-row>
              <v-col class="d-flex justify center">
                <v-text-field
                  v-model="NombrePacienteCliente"
                  label="Nombre del paciente o cliente"
                  shaped
                  filled
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row
              ><v-col>
                <v-text-field
                  v-model.number="DocNumber"
                  label="Número del documento"
                  shaped
                  filled
                ></v-text-field></v-col
            ></v-row>
            <v-row class="d-flex justify-center">
              <v-btn @click="Ver2()">Facturar</v-btn>
              <v-btn @click="VerIngresos()">Ver Ingresos</v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card-text>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-center">
                Acciones
              </th>
              <!-- <v-icon color="red">error</v-icon>
                 -->
              <th class="text-center">
                N°
              </th>
              <th class="text-center">
                Paciente-Cliente
              </th>
              <th class="text-center">
                Fecha
              </th>

              <th class="text-center">
                Monto
              </th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="Presupuesto in Presupuestos" :key="Presupuesto.Numero">
              <td>
                <v-icon>menu</v-icon>
              </td>
              <td>
                {{ Presupuesto.Numero }}
              </td>
              <td>
                {{ Presupuesto.Paciente }}
              </td>
              <td>
                {{ Presupuesto.Fecha }}
              </td>
              <td>
                {{ Presupuesto.Monto }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-col>
  </v-row>
</template>
<script>
import { db } from "@/main";
export default {
  data() {
    return {
      Presupuestos: [],
      NombrePacienteCliente: null,
      DocNumber: null,
      Ingresos: []
    };
  },
  methods: {
    //Este método es el que permite buscar los presupuestos por nombre o número del documento
    VerFactura() {
      if (this.DocNumber == null) {
        db.collection("Presupuestos")
          .where("Paciente", "==", this.NombrePacienteCliente)
          .onSnapshot(res => {
            const changes = res.docChanges();
            changes.forEach(change => {
              if (change.type === "added") {
                this.Facturas.push({
                  ...change.doc.data(),
                  id: change.doc.id
                });
                console.log(this.Facturas);
              }
            });
          });
      } else if (this.NombrePacienteCliente == null) {
        db.collection("Presupuestos")
          .where("Numero", "==", this.DocNumber)
          .onSnapshot(res => {
            const changes = res.docChanges();
            changes.forEach(change => {
              if (change.type === "added") {
                this.Facturas.push({
                  ...change.doc.data(),
                  id: change.doc.id
                });
                console.log(this.Facturas);
              }
            });
          });
      }
    },
    //De la misma forma, este método agarra todos los presupuestos, no solo los que tienen el nombre o número indicado. 
    Ver2() {
      this.Presupuestos = [];
      db.collection("Presupuestos").onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === "added") {
            this.Presupuestos.push({
              ...change.doc.data(),
              id: change.doc.id
            });
            console.log(this.Presupuestos);
          }
        });
      });
    }
  }
};
</script>
