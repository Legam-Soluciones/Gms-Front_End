<template>
  <div id="stats">
    Expedientes Nuevos
    <area-chart :data="expnuevoschart"></area-chart>
    Expedientes por Género
    <pie-chart :data="generochart"></pie-chart>
    Expedientes por Edad
    <pie-chart :data="edadchart"></pie-chart>
    Asistencias por día
    <column-chart :data="datoscolumna"></column-chart>
    Asistencias por motivo
    <pie-chart :donut="true" :data="motivochart"></pie-chart>
    Asistencias a citas en cantidad
    <column-chart :data="citascantidadchart"></column-chart>
    Asistencias a citas en porcentaje
    <pie-chart suffix="%" :data="citasporcentajechart"></pie-chart>
    Facturación por periódo
    <column-chart prefix="₡" :data="facturacionchart"></column-chart>
    Cuentas por cobrar
    <column-chart prefix="₡" :data="cobrarchart"></column-chart>
    Cuentas por cobrar agrupadas por antigüedad
    <pie-chart :donut="true" :data="cobrarchart2"></pie-chart>
    Monto de gastos agrupado por mes
    <column-chart prefix="₡" :data="gastoschart"></column-chart>
    Gastos por categoría en porcentaje
    <pie-chart :data="gastoschart2"></pie-chart>

    <div v-for="Estadistica in Estadisticas" :key="Estadistica.id">
      {{ Estadistica.Genero }}
      {{ Estadistica.Nombre }}
    </div>
    <h1>{{ contador }}</h1>
    <button @click.prevent="aumentarcontador">Contar</button>
    <button @click="addDocument()">Añadir documento</button>
    <button @click="Stats()">Prueba</button>
    <input v-model="name" />
  </div>
</template>

<script>
import db from "@/main.js";
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  data() {
    //statsRef.update({ count: increment });

    //statsRef.update({ count: decrement });
    return {
      contador: 0,
      name: null,
      Estadisticas: [],
      expnuevoschart: {
        Enero: 49,
        Febrero: 217,
        Marzo: 302,
        Abril: 55,
        Mayo: 580,
        Junio: 365,
        Julio: 169,
        Agosto: 159,
        Septiembre: 146,
        Octubre: 143,
        Noviembre: 18
      },
      generochart: {
        // hombres: 6,
        // mujeres: 94,
      },
      datoscolumna: {
        Lunes: 0,
        Martes: 0,
        Miércoles: 7,
        Jueves: 1,
        Viernes: 0,
        Sàbado: 0,
        Domingo: 0
      },
      edadchart: {
        "18-24": 3,
        "25-34": 15,
        "35-44": 31,
        "45-54": 24,
        "55-64": 14,
        "65+": 13
      },
      motivochart: {
        "Primera Sesion PRP": 4,
        "Segunda Sesion PRP": 3,
        "Tercera Sesion PRP": 1
      },
      citascantidadchart: {
        "No asistió": 20,
        Asistió: 8
      },
      citasporcentajechart: {
        "No Asistió": 71,
        Asistió: 29
      },
      facturacionchart: [
        {
          name: "Uruca",
          data: {
            Julio: 40560.0,
            Agosto: 2488212.0,
            Septiembre: 6863018.0,
            Octubre: 9993762.0,
            Noviembre: 7043406.5,
            Diciembre: 3490259.5
          }
        },
        {
          name: "Hospital Cooperativo, frente al hospital de San Carlos",
          data: {
            Julio: 0,
            Agosto: 0,
            Septiembre: 195000.0,
            Octubre: 0,
            Noviembre: 335259.84,
            Diciembre: 428579.5
          }
        },
        {
          name: "Puntarenas, ALGARA Centro Médico y Dental",
          data: {
            Julio: 0,
            Agosto: 0,
            Septiembre: 0,
            Octubre: 0,
            Noviembre: 240767.13,
            Diciembre: 411929.38
          }
        },
        {
          name: "San Ramón, Clínica Phillips",
          data: {
            Julio: 0,
            Agosto: 0,
            Septiembre: 0,
            Octubre: 0,
            Noviembre: 492085.38,
            Diciembre: 640531.1
          }
        }
      ],
      cobrarchart: {
        Uruca: 96953.98
      },
      cobrarchart2: {
        "de 1 a 30 días vencido": 43274.24,
        "más de 90 días vencido": 53679.73
      },
      gastoschart: {
        Julio: 50000.0,
        Agosto: 958195.8,
        Septiembre: 1638959.63,
        Octubre: 1122798.63,
        Noviembre: 2459855.0,
        Diciembre: 284238.6
      },
      gastoschart2: {
        "No especificado": 100
      }
    };
  },
  //La linea de código comentada indica si se filtraran los datos donde el campo "NumeroIdentificacion" sea igual a la variable cédula
  created() {
    db.collection("Estadisticas")
      //.where("NumeroIdentificacion", "==", this.cedula)
      .onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === "added") {
            this.Estadisticas.push({
              ...change.doc.data(),
              id: change.doc.id
            });
            console.log(this.Estadisticas);
          }
        });
      });
  },

  methods: {
    aumentarcontador: function() {
      this.contador += 1;
    },

    //Este método añade los documentos a la base de datos, pero lo hace de una forma diferente.
    //La constante batch es la que se encarga de este proceso. A diferencia de añadir datos de manera normal, esta
    addDocument() {
      const increment = firebase.firestore.FieldValue.increment(1);
      const statsRef = db.collection("Estadisticas").doc("EstadisticasTotales");
      const statsRef2 = db.collection("Estadisticas").doc();
      const batch = db.batch();
      batch.set(statsRef2, { contador: this.contador });
      batch.set(statsRef, { count: increment }, { merge: true });
      batch.commit();
    },
    Stats() {
      console.log(this.Estadisticas);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
