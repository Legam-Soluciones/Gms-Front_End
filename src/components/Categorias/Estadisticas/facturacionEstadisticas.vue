<template>
  <div id="stats">
    <div v-for="Estadistica in Estadisticas" v-bind:key="Estadistica.id">
      Facturación por periódo
      <column-chart
        id="8"
        thousands=","
        prefix="₡"
        :data="[
          {
            name: 'Uruca',
            data: {
              Julio: Estadistica.Uruca.Julio,
              Agosto: Estadistica.Uruca.Agosto,
              Septiembre: Estadistica.Uruca.Septiembre,
              Octubre: Estadistica.Uruca.Octubre,
              Noviembre: Estadistica.Uruca.Noviembre,
              Diciembre: Estadistica.Uruca.Diciembre
            }
          },
          {
            name: 'Hospital Cooperativo, frente al hospital de San Carlos',
            data: {
              Julio: Estadistica.Hospital.Julio,
              Agosto: Estadistica.Hospital.Agosto,
              Septiembre: Estadistica.Hospital.Septiembre,
              Octubre: Estadistica.Hospital.Octubre,
              Noviembre: Estadistica.Hospital.Noviembre,
              Diciembre: Estadistica.Hospital.Diciembre
            }
          },
          {
            name: 'Puntarenas, ALGARA Centro Médico y Dental',
            data: {
              Julio: Estadistica.Puntarenas.Julio,
              Agosto: Estadistica.Puntarenas.Agosto,
              Septiembre: Estadistica.Puntarenas.Septiembre,
              Octubre: Estadistica.Puntarenas.Octubre,
              Noviembre: Estadistica.Puntarenas.Noviembre,
              Diciembre: Estadistica.Puntarenas.Diciembre
            }
          },
          {
            name: 'San Ramón, Clínica Phillips',
            data: {
              Julio: Estadistica.SanRamon.Julio,
              Agosto: Estadistica.SanRamon.Agosto,
              Septiembre: Estadistica.SanRamon.Septiembre,
              Octubre: Estadistica.SanRamon.Octubre,
              Noviembre: Estadistica.SanRamon.Noviembre,
              Diciembre: Estadistica.SanRamon.Diciembre
            }
          }
        ]"
      ></column-chart>
      Cuentas por cobrar
      <column-chart
        id="9"
        thousands=","
        prefix="₡"
        :data="[['Uruca', Estadistica.UrucaCuentas]]"
      ></column-chart>
      Cuentas por cobrar agrupadas por antigüedad
      <pie-chart
        id="10"
        :donut="true"
        thousands=","
        :data="cobrarchart2"
      ></pie-chart>
    </div>
  </div>
</template>

<script>
import { db } from "@/main.js";
export default {
  data() {
    return {
      contador: 0,
      name: null,
      Estadisticas: [],
      generochart: {},
      facturacionchart: [
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
      cobrarchart2: {
        "de 1 a 30 días vencido": 43274.24,
        "más de 90 días vencido": 53679.73
      }
    };
  },
  created() {
    this.mostrarestadisticas();
  },
  methods: {
    mostrarestadisticas() {
      var docRef = db.collection("Estadisticas").doc("EstadisticasIngresos");
      docRef
        .get()
        .then(doc => {
          this.Estadisticas.push(doc.data());
          console.log("Document data:", this.Estadisticas);
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
          alert(
            "No se pudieron recuperar los datos. Por favor intentarlo de nuevo."
          );
        });
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
