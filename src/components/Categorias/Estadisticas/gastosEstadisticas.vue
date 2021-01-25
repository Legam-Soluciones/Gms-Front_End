<template>
  <div id="stats">
    <div v-for="Estadistica in Estadisticas" v-bind:key="Estadistica.id">
      Monto de gastos agrupado por mes
      <column-chart
        id="11"
        thousands=","
        prefix="₡"
        :data="[
          {
            name: 'Julio',
            data: {
              '': Estadistica.Gastos.Julio
            }
          },
          {
            name: 'Agosto',
            data: {
              '': Estadistica.Gastos.Agosto
            }
          },
          {
            name: 'Septiembre',
            data: {
              '': Estadistica.Gastos.Septiembre
            }
          },
          {
            name: 'Octubre',
            data: {
              '': Estadistica.Gastos.Octubre
            }
          },
          {
            name: 'Noviembre',
            data: {
              '': Estadistica.Gastos.Noviembre
            }
          },
          {
            name: 'Diciembre',
            data: {
              '': Estadistica.Gastos.Diciembre
            }
          }
        ]"
      ></column-chart>
      Gastos por categoría en porcentaje
      <pie-chart id="12" :data="gastoschart2"></pie-chart>
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
      gastoschart2: {
        "No especificado": 100
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
