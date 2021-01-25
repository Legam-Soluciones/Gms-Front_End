<!-- En las estadísticas de los expedientes, están la cantidad de expedientes nuevos por mes, los expedientes por género y por rango de edad  -->
<template>
  <div id="stats">
    <div v-for="Estadistica in Estadisticas" v-bind:key="Estadistica.id">
      Expedientes Nuevos
      <area-chart
        id="1"
        :data="[
          ['Enero', Estadistica.ExpedientesMes.Enero],
          ['Febrero', Estadistica.ExpedientesMes.Febrero],
          ['Marzo', Estadistica.ExpedientesMes.Marzo],
          ['Abril', Estadistica.ExpedientesMes.Abril],
          ['Mayo', Estadistica.ExpedientesMes.Mayo],
          ['Junio', Estadistica.ExpedientesMes.Junio],
          ['Julio', Estadistica.ExpedientesMes.Julio],
          ['Agosto', Estadistica.ExpedientesMes.Agosto],
          ['Septiembre', Estadistica.ExpedientesMes.Septiembre],
          ['Octubre', Estadistica.ExpedientesMes.Octubre],
          ['Noviembre', Estadistica.ExpedientesMes.Noviembre],
          ['Diciembre', Estadistica.ExpedientesMes.Diciembre]
        ]"
      ></area-chart>

      Expedientes por Género <br />Total de Expedientes:
      {{ Estadistica.TotalExpedientes }}
      <br />
      Hombres: {{ Estadistica.hombres }} <br />
      Mujeres: {{ Estadistica.mujeres }}
      <pie-chart
        id="2"
        suffix="%"
        :precision="3"
        :data="[
          [
            'Hombres',
            (Estadistica.hombres * 100) / Estadistica.TotalExpedientes
          ],
          [
            'Mujeres',
            (Estadistica.mujeres * 100) / Estadistica.TotalExpedientes
          ]
        ]"
      ></pie-chart>
      Expedientes por Edad
      <pie-chart
        id="3"
        suffix="%"
        :precision="3"
        :data="[
          [
            '18-24',
            (Estadistica.Edades.Edad1 * 100) / Estadistica.TotalExpedientes
          ],
          [
            '25-34',
            (Estadistica.Edades.Edad2 * 100) / Estadistica.TotalExpedientes
          ],
          [
            '35-44',
            (Estadistica.Edades.Edad3 * 100) / Estadistica.TotalExpedientes
          ],
          [
            '45-54',
            (Estadistica.Edades.Edad4 * 100) / Estadistica.TotalExpedientes
          ],
          [
            '55-64',
            (Estadistica.Edades.Edad5 * 100) / Estadistica.TotalExpedientes
          ],
          [
            '65',
            (Estadistica.Edades.Edad6 * 100) / Estadistica.TotalExpedientes
          ]
        ]"
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
      Estadisticas: []
    };
  },
  created() {
    this.mostrarestadisticas();
  },
  methods: {
    mostrarestadisticas() {
      var docRef = db.collection("Estadisticas").doc("EstadisticasExpedientes");
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
