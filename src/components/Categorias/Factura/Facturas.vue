<!-- Este archivo muestra las facturas de la base de datos -->
<template>
  <v-row>
    <v-col cols="12">
      <v-card class="font-weight-medium mt-12 text-center subtitle-1">
        <h3>Búsqueda de Facturas</h3>
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
        <!-- Esta tabla contiene la información de las distintas facturas. -->
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-center">
                Acciones
              </th>
              <!-- <v-icon color="red">error</v-icon>
                 -->
              <th class="text-center">
                Tipo
              </th>
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
                Estado de Pago
              </th>
              <th class="text-center">
                Estado de Hacienda
              </th>
              <th class="text-center">
                <v-icon>email</v-icon>
              </th>
              <th class="text-center">
                Monto
              </th>
              <th class="text-center">
                Saldo
              </th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="Factura in Facturas" :key="Factura.Numero">
              <td>
                <v-icon>menu</v-icon>
              </td>
              <td>
                {{ Factura.Tipo }}
              </td>
              <td>
                {{ Factura.Numero }}
              </td>
              <td>
                {{ Factura.Paciente }}
              </td>
              <td>
                {{ Factura.Fecha }}
              </td>
              <td
                class="text-center green--text ml-4"
                v-if="Factura.EstadodePago == true"
              >
                Pagado
              </td>
              <td class="red--text" v-if="Factura.EstadodePago == false">
                Pendiente
              </td>
              <td v-if="Factura.EstadodeHacienda == true" class="green--text">
                <v-icon small color="green">check</v-icon>
                Aceptado
              </td>
              <td
                v-if="Factura.EstadodeHacienda == false"
                class="red--text text-center"
              >
                <v-icon small color="red">error</v-icon>
                Rechazado
              </td>
              <td>
                <v-icon color="green" v-if="Factura.Correo == true"
                  >check</v-icon
                >
                <v-icon color="red" v-if="Factura.Correo == false"
                  >error</v-icon
                >
              </td>
              <td>
                {{ Factura.Monto }}
              </td>
              <td v-if="Factura.Saldo > 0" class="green--text text-center">
                {{ Factura.Saldo }}
              </td>
              <td v-if="Factura.Saldo < 0" class="red--text text-center">
                {{ Factura.Saldo }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-col>
    <!-- Esta parte muestra los ingresos dependiendo del medio de pago de las distintas facturas -->
    <v-col>
      <v-card
        flat
        class="d-flex text-center align-center"
        width="1400"
        height="300"
        v-for="Ingreso in Ingresos"
        :key="Ingreso.id"
      >
        <v-row class="d-flex justify-center">
          <v-card class="ma-2" height="125" width="150" outlined>
            <v-card-text>Cheque:</v-card-text>
            {{ Ingreso.Cheque }}
          </v-card>
          <v-card class="ma-2" height="125" width="150" outlined>
            <v-card-text>Efectivo:</v-card-text>
            {{ Ingreso.Efectivo }}
          </v-card>
          <v-card class="ma-2" height="125" width="150" outlined>
            <v-card-text>Tarjeta:</v-card-text>
            {{ Ingreso.Tarjeta }}
          </v-card>
          <v-card class="ma-2" height="125" width="150" outlined>
            <v-card-text>Transferencias:</v-card-text>
            {{ Ingreso.TransferenciaDeposito }}
          </v-card>
          <v-card class="ma-2" height="125" width="150" outlined>
            <v-card-text>Total:</v-card-text>
            {{ Ingreso.Total }}
          </v-card>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { db } from "@/main";
export default {
  data() {
    return {
      Facturas: [],
      NombrePacienteCliente: null,
      DocNumber: null,
      Ingresos: []
    };
  },
  methods: {
    //Este método busca las facturas dependiendo del Nombre o el Númeor del documento
    VerFactura() {
      if (this.DocNumber == null) {
        db.collection("Factura")
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
        db.collection("Factura")
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
    //Este método muestra todas las facturas
    Ver2() {
      this.Facturas = [];
      db.collection("Factura").onSnapshot(res => {
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
    },
    //Este método muestra los ingresos de las facturas
    VerIngresos() {
      var docRef = db.collection("Estadisticas").doc("EstadisticasFactura");
      docRef
        .get()
        .then(doc => {
          this.Ingresos.push(doc.data());
          console.log("Document data:", this.Ingresos);
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
          alert(
            "No se pudieron recuperar los datos. Por favor refresca la página e inténtalo de nuevo"
          );
        });
    }
  }
};
</script>
