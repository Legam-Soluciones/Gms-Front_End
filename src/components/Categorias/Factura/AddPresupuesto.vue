<!-- Parecido al de Facturas, pero con los presupuestos -->
<template>
  <div>
    <v-row>
      <v-col cols="5">
        <!-- Aquí es donde está el logo -->
        <v-img
          max-height="300px"
          max-width="300px"
          src="@/assets/LogoM.png"
        ></v-img>
        <br />
        <p>Compañía</p>
        <v-select
          v-model="Company"
          label="Seleccione una compañia"
          outlined
          :items="['Clínica Médica Más Salud & Salud LTDA', 'Otros']"
        ></v-select>
        <p>Sucursal</p>
        <v-select
          v-model="Sucursal"
          outlined
          label="Seleccione una sucursal"
          :items="[
            'Cañas',
            'Centro Médico San Isidro',
            'Ciudad Neily, Centro Médico y Farmacia San Pedro',
            'Guácimo, Centro Médico Vitaliza',
            'Guápiles',
            'Hospital Cooperativo, frente al hospital de San Carlos',
            'Liberia, Clínica Monte Horeb',
            'Liberia, Clínica San Marino',
            'Puntarenas, ALGARA Centro Médico y Dental',
            'San Ramón, Clínica Phillips',
            'Santa Cruz de Guanacaste, Centro Médico Santa Cruz',
            'Turrialba, Centro Médico Arias y Soto',
            'Uruca'
          ]"
        ></v-select>
        <p>Moneda</p>
        <v-select
          v-model="Moneda"
          outlined
          label="Tipo de moneda"
          :items="['Colones', 'Dólares']"
        >
        </v-select>
      </v-col>
      <v-col cols="3"> </v-col>
      <v-col cols="3">
        <br />
        <p>Nuevo Presupuesto</p>
        <!-- <v-select
          v-model="TipoFactura"
          outlined
          label="¿Contado o Crédito?"
          :items="['Contado', 'Crédito']"
        ></v-select>
        <v-select
          v-model="TipodeFactura"
          outlined
          label="Tipo de Factura"
          :items="[
            'Factura Electrónica',
            'Tiquete Electrónico',
            'Nota de Crédito Electrónica'
          ]"
        ></v-select> -->
        <p>Paciente</p>
        <v-text-field
          v-model="Paciente"
          label="Paciente (opcional)"
        ></v-text-field>
        <p>Cliente</p>
        <v-text-field
          v-model="Cliente"
          label="Cliente (opcional)"
        ></v-text-field>
        <p>Vigencia</p>
        <v-text-field type="date" v-model="Vigencia"></v-text-field>
      </v-col>
    </v-row>
    <v-simple-table>
      <thead>
        <tr>
          <th>
            Grupo (opcional)
          </th>
          <th>
            Servicio o producto
          </th>
          <th>
            Cantidad
          </th>
          <th>
            Precio Unitario
          </th>
          <th>
            Desc. %
          </th>
          <th>
            Desc. Unitario
          </th>
          <th>
            IVA %
          </th>
          <th>
            IVA Unitario
          </th>
          <th>
            IVA Total
          </th>
          <th>
            Total en colones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <v-text-field
              class="mt-6"
              outlined
              v-model="NombreProducto"
            ></v-text-field>
          </td>
        </tr>
        <tr v-for="Producto in Inventario" :key="Producto.id">
          <td>
            <v-select
              v-model="Grupo"
              :items="[
                'Cita 1',
                'Cita 2',
                'Cita 3',
                'Cita 4',
                'Cita 5',
                'Cita 6',
                'Cita 7',
                'Cita 8',
                'Cita 9',
                'Cita 10'
              ]"
            ></v-select>
          </td>
          <td>
            <v-text-field v-model="Producto.Producto"></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model.number="Cantidad"
              type="number"
            ></v-text-field>
          </td>
          <td>
            <v-text-field v-model.number="Producto.Precio"></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model.number="DescuentoPorc"
              type="number"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model.number="DescuentoUnit"
              type="number"
              disabled
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model.number="ImpuestoPorc"
              type="number"
              disabled
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model.number="ImpuestoVerdadero"
              type="number"
              disabled
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model.number="ImpuestoTotal"
              type="number"
              disabled
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model.number="Total"
              type="number"
              disabled
            ></v-text-field>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-btn @click="Datos()">Prueba</v-btn>
    <v-btn @click="VerProducto()">Ver Producto</v-btn>
    <v-row>
      <v-col cols="8"></v-col>
      <v-col cols="4">
        <p>Subtotal</p>
        <v-text-field
          v-model="PrecioTotal"
          outlined
          disabled
          filled
        ></v-text-field>
        <p>Descuento</p>
        <v-text-field
          v-model="DescuentoTotal"
          outlined
          disabled
          filled
        ></v-text-field>
        <p>I.V.A</p>
        <v-text-field
          v-model="ImpuestoTotal"
          outlined
          disabled
          filled
        ></v-text-field>
        <p>Total</p>
        <v-text-field v-model="Total" outlined disabled filled></v-text-field>
        <p>I.V.A Devuelto</p>
        <v-text-field
          v-model="ImpuestoDevuelto"
          outlined
          disabled
          filled
        ></v-text-field>
        <p>Total a cobrar</p>
        <v-text-field v-model="Total" outlined disabled filled></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <p>Notas</p>
        <v-text-field v-model="Notas" counter="1000"></v-text-field>
        <v-btn @click="Facturar(), EstadisticasFactura()"
          >Guardar Factura</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { db } from "@/main";

import { FacturaRef } from "@/main";
import { increment } from "@/main.js";
// import firebase from "firebase/app";
import "firebase/firestore";
export default {
  data() {
    return {
      Inventario: [],
      Precio: 15000,
      Cantidad: null,
      PrecioTotal: null,
      DescuentoPorc: null,
      DescuentoUnit: null,
      DescuentoTotal: null,
      Total: null,
      TotalFaltante: null,
      Impuesto: null,
      ImpuestoTotal: null,
      ImpuestoPorc: 4,
      ImpuestoDesc: null,
      ImpuestoVerdadero: null,
      ImpuestoDevuelto: null,
      Pago: "",
      check: false,
      Referencia: false,
      Contingencia: false,
      Pagado: null,
      Tarjeta: null,
      Efectivo: null,
      Transferencia: null,
      Cheque: null,
      Company: null,
      Sucursal: null,
      Moneda: null,
      TipoFactura: null,
      Paciente: null,
      Cliente: null,
      Fecha: null,
      NombreProducto: null,
      Datafono: null,
      Notas: null,
      NumeroReferencia: null,
      RazonReferencia: null,
      RazonContingencia: null,
      NumeroComprobante: null,
      TipodeFactura: null,
      Numero: [],
      Vigencia: null,
      Grupo: null
    };
  },

  mounted() {
    this.Datos();
  },

  methods: {
    Datos() {
      this.PrecioTotal = this.Precio * this.Cantidad;
      this.Impuesto = (this.Precio * this.ImpuestoPorc) / 100;
      this.ImpuestoDesc = (this.Impuesto * this.DescuentoPorc) / 100;
      this.ImpuestoVerdadero = this.Impuesto - this.ImpuestoDesc;
      this.ImpuestoTotal = this.ImpuestoVerdadero * this.Cantidad;
      this.DescuentoTotal = (this.PrecioTotal * this.DescuentoPorc) / 100;
      this.DescuentoUnit = (this.Precio * this.DescuentoPorc) / 100;
      this.Total = this.ImpuestoTotal + this.PrecioTotal - this.DescuentoTotal;
      this.ImpuestoDevuelto = 0;
      this.Pagado =
        this.Tarjeta + this.Efectivo + this.Transferencia + this.Cheque;
      this.TotalFaltante = this.Total - this.Pagado;
      if (this.Pago == "Tarjeta") {
        this.Total = this.PrecioTotal - this.DescuentoTotal;
        this.ImpuestoDevuelto = this.ImpuestoTotal;
      }
    },
    VerProducto() {
      db.collection("Inventario")
        .where("Producto", "==", this.NombreProducto)
        .onSnapshot(res => {
          const changes = res.docChanges();
          changes.forEach(change => {
            if (change.type === "added") {
              this.Inventario.push({
                ...change.doc.data(),
                id: change.doc.id
              });
            }
          });
        });
    },
    //La única diferencia con este método es que es guardado en la colección Presupuestos.
    Facturar() {
      const batch = db.batch();
      try {
        db.collection("Presupuestos").add({
          Compañia: this.Company,
          Sucursal: this.Sucursal,
          Moneda: this.Moneda,
          Paciente: this.Paciente,
          Cliente: this.Cliente,
          Cantidad: this.Cantidad,
          Descuento: this.DescuentoPorc,
          DescuentoUnidad: this.DescuentoUnit,
          ImpuestoPorcentaje: this.ImpuestoPorc,
          ImpuestoUnitario: this.ImpuestoVerdadero,
          ImpuestoDevuelto: this.ImpuestoDevuelto,
          ImpuestoTotal: this.ImpuestoTotal,
          Total: this.Total,
          Monto: this.PrecioTotal,
          DescuentoTotal: this.DescuentoTotal,
          NombreProducto: this.NombreProducto,
          Notas: this.Notas,
          EstadodePago: false,
          EstadodeHacienda: false,
          Correo: false,
          Vigencia: this.Vigencia,
          Fecha: new Date().toISOString().substr(0, 10)
        });
        batch.set(FacturaRef, { Numero: increment }, { merge: true });
        batch.commit();
      } catch (error) {
        console.log(error);
        alert("No se pudo añadir la factura. Por favor intentarlo de nuevo.");
      }
    }
    // EstadisticasFactura() {
    //   const batch = db.batch();
    //   const statsfactura = firebase.firestore.FieldValue.increment(this.Total);
    //   const Efectivo2 = firebase.firestore.FieldValue.increment(this.Efectivo);
    //   const Cheque2 = firebase.firestore.FieldValue.increment(this.Cheque);
    //   const Tarjeta2 = firebase.firestore.FieldValue.increment(this.Tarjeta);
    //   const Transferencia2 = firebase.firestore.FieldValue.increment(
    //     this.Transferencia
    //   );

    //   if (this.Pago == "Efectivo") {
    //     batch.set(FacturaRef, { Efectivo: statsfactura }, { merge: true });
    //     batch.commit();
    //   }

    //   if (this.Pago == "Tarjeta") {
    //     batch.set(FacturaRef, { Tarjeta: statsfactura }, { merge: true });
    //     batch.commit();
    //   }
    //   if (this.Pago == "Cheque") {
    //     batch.set(FacturaRef, { Cheque: statsfactura }, { merge: true });
    //     batch.commit();
    //   }
    //   if (this.Pago == "Transferencia") {
    //     batch.set(
    //       FacturaRef,
    //       { TransferenciaDeposito: statsfactura },
    //       { merge: true }
    //     );
    //     batch.commit();
    //   }
    //   if (this.check == true) {
    //     batch.set(FacturaRef, { Efectivo: Efectivo2 }, { merge: true });
    //     batch.set(FacturaRef, { Tarjeta: Tarjeta2 }, { merge: true });
    //     batch.set(FacturaRef, { Cheque: Cheque2 }, { merge: true });
    //     batch.set(
    //       FacturaRef,
    //       { TransferenciaDeposito: Transferencia2 },
    //       { merge: true }
    //     );
    //   }
    // }
  }
};
</script>
