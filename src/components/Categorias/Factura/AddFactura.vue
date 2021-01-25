<!-- Este archivo es donde se añaden facturas la base da datos.-->
<template>
  <div>
    <v-row>
      <!-- Esta parte contiene los campos que se necesitan llenar para añadir la factura -->
      <v-col cols="5">
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
        <p>Nueva Factura</p>
        <v-select
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
        ></v-select>
        <p>Paciente</p>
        <v-text-field v-model="Paciente" label="Nombre"></v-text-field>
        <p>Cliente</p>
        <v-text-field v-model="Cliente" label="Nombre"></v-text-field>
      </v-col>
    </v-row>
    <v-simple-table>
      <thead>
        <tr>
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
    <!-- El botón de prueba hace los cálculos del precio, total, impuestos, entre otras cosas del producto.-->
    <v-btn @click="Datos()">Prueba</v-btn>
    <!-- El botón Ver Producto recupera los datos del producto de la base de datos -->
    <v-btn @click="VerProducto()">Ver Producto</v-btn>
    <v-row>
      <v-col cols="5">
        <!-- Si está checkbox está activa entonces se mostrarán distintos medios de pago con los que el cliente podrá pagar según vea
         necesario -->
        <v-checkbox
          v-model="check"
          color="indigo"
          :label="`Medio de pago múltiples`"
          @click="check == !check"
        ></v-checkbox>
        <div v-if="check == false">
          <p>Medio de pago único</p>
          <v-select
            v-model="Pago"
            outlined
            :items="['Efectivo', 'Tarjeta', 'Cheque', 'Transferencia']"
          >
          </v-select>
          <div v-if="Pago == 'Tarjeta'">
            <p>Datáfono</p>
            <v-select
              v-model="Datafono"
              outlined
              :items="['BAC CREDOMATIC', 'PROMERICA']"
            >
            </v-select>
          </div>
        </div>
        <!-- Si la checkbox de arriba está marcada, entonces se mostrarán campos que se encuentran abajo:-->
        <div v-if="check == true">
          <p>Tarjeta</p>
          <v-text-field v-model.number="Tarjeta"></v-text-field>
          <p>Datáfono</p>
          <v-select
            outlined
            :items="['BAC CREDOMATIC', 'PROMERICA']"
          ></v-select>
          <p>Efectivo</p>
          <v-text-field v-model.number="Efectivo"></v-text-field>
          <p>Transferencia</p>
          <v-text-field v-model.number="Transferencia"></v-text-field>
          <p>Cheque</p>
          <v-text-field v-model.number="Cheque"></v-text-field>
          <p>Total Pagado</p>
          <v-text-field
            v-model="Pagado"
            outlined
            filled
            disabled
          ></v-text-field>
          <p>Faltante</p>
          <v-text-field
            v-model="TotalFaltante"
            outlined
            filled
            disabled
          ></v-text-field>
        </div>
        <!-- Aquí es donde se muestran los precios totales, los subtotales, los descuentos, entre otras cosas -->
      </v-col>
      <v-col cols="3"></v-col>
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
        <v-checkbox
          v-model="Referencia"
          color="indigo"
          :label="`Información de referencia`"
          @click="Referencia == !Referencia"
        ></v-checkbox>
        <div v-if="Referencia == true">
          <p>Número</p>
          <v-text-field v-model="NumeroReferencia" counter="50"></v-text-field>
          <p>Razón</p>
          <v-text-field v-model="RazonReferencia"></v-text-field>
        </div>
        <v-checkbox
          v-model="Contingencia"
          color="indigo"
          :label="`Referenciar contingencia`"
          @click="Contingencia == !Contingencia"
        ></v-checkbox>
        <div v-if="Contingencia == true">
          <v-text-field
            v-model="NumeroComprobante"
            outlined
            counter="50"
            placeholder="Número del comprobante de contingencia"
          ></v-text-field>
          <v-text-field
            v-model="RazonContingencia"
            outlined
            counter="180"
            placeholder="Razón de la contingencia"
          ></v-text-field>
          <p>Fecha de emisión</p>
          <v-text-field
            v-model="Fecha"
            outlined
            type="datetime-local"
          ></v-text-field>
        </div>
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
import firebase from "firebase/app";
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
      Numero: []
    };
  },

  mounted() {
    this.Datos();
  },

  methods: {
    //Este método es el que calcula todos los datos, precios, e impuestos.
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
    //Este método es el que se usa para ver el producto que está guardado en el inventario. Por el momento el único producto es "Dermapen"
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
    //Este método es el que envía la factura a la base de datos. NO la envía a hacienda.
    Facturar() {
      const batch = db.batch();
      try {
        db.collection("Factura").add({
          Compañia: this.Company,
          Sucursal: this.Sucursal,
          Moneda: this.Moneda,
          TipoFactura: this.TipoFactura,
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
          TipodePago: this.Pago,
          Tarjeta: this.Tarjeta,
          Efectivo: this.Efectivo,
          Transferencia: this.Transferencia,
          Cheque: this.Cheque,
          Monto: this.PrecioTotal,
          DescuentoTotal: this.DescuentoTotal,
          Referencia: this.Referencia,
          Contingencia: this.Contingencia,
          Fecha: this.Fecha,
          NombreProducto: this.NombreProducto,
          Notas: this.Notas,
          NumeroReferencia: this.NumeroReferencia,
          RazonReferencia: this.RazonReferencia,
          NumeroComprobante: this.NumeroComprobante,
          EstadodePago: false,
          EstadodeHacienda: false,
          Correo: false,
          Tipo: this.TipodeFactura
        });
        //Este batch incremente un número que va aumentando de uno en uno conforme se añaden facturas.
        //La idea es que este número sea el que defina la ID de la factura.
        batch.set(FacturaRef, { Numero: increment }, { merge: true });
        batch.commit();
      } catch (error) {
        console.log(error);
        alert("No se pudo añadir la factura. Por favor intentarlo de nuevo.");
      }
    },
    //Este método añade datos al documento EstadísticasFactura, la idea de este es añadir la cantidad de dinero
    //que se factura en cada uno de los distintos métodos de pago.
    EstadisticasFactura() {
      const batch = db.batch();
      const statsfactura = firebase.firestore.FieldValue.increment(this.Total);
      const Efectivo2 = firebase.firestore.FieldValue.increment(this.Efectivo);
      const Cheque2 = firebase.firestore.FieldValue.increment(this.Cheque);
      const Tarjeta2 = firebase.firestore.FieldValue.increment(this.Tarjeta);
      const Transferencia2 = firebase.firestore.FieldValue.increment(
        this.Transferencia
      );
      if (this.Pago == "Efectivo") {
        batch.set(FacturaRef, { Efectivo: statsfactura }, { merge: true });
        batch.commit();
      }
      if (this.Pago == "Tarjeta") {
        batch.set(FacturaRef, { Tarjeta: statsfactura }, { merge: true });
        batch.commit();
      }
      if (this.Pago == "Cheque") {
        batch.set(FacturaRef, { Cheque: statsfactura }, { merge: true });
        batch.commit();
      }
      if (this.Pago == "Transferencia") {
        batch.set(
          FacturaRef,
          { TransferenciaDeposito: statsfactura },
          { merge: true }
        );
        batch.commit();
      }
      if (this.check == true) {
        batch.set(FacturaRef, { Efectivo: Efectivo2 }, { merge: true });
        batch.set(FacturaRef, { Tarjeta: Tarjeta2 }, { merge: true });
        batch.set(FacturaRef, { Cheque: Cheque2 }, { merge: true });
        batch.set(
          FacturaRef,
          { TransferenciaDeposito: Transferencia2 },
          { merge: true }
        );
      }
    }
  }
};
</script>
