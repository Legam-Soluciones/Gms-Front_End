<!--Estas son las estadísticas correspondientes a la asistencia de citas de la clínica.-->
<template>
  <div id="stats">
    <div v-for="Estadistica in Estadisticas" v-bind:key="Estadistica.Stats">
      Asistencias por día
      <column-chart
        id="4"
        :data="[
          {
            name: 'Lunes',
            data: {
              '': Estadistica.Semana.Lunes
            }
          },
          {
            name: 'Martes',
            data: {
              '': Estadistica.Semana.Martes
            }
          },
          {
            name: 'Miércoles',
            data: {
              '': Estadistica.Semana.Miércoles
            }
          },
          {
            name: 'Jueves',
            data: {
              '': Estadistica.Semana.Jueves
            }
          },
          {
            name: 'Viernes',
            data: {
              '': Estadistica.Semana.Viernes
            }
          },
          {
            name: 'Sábado',
            data: {
              '': Estadistica.Semana.Sábado
            }
          },
          {
            name: 'Domingo',
            data: {
              '': Estadistica.Semana.Domingo
            }
          }
        ]"
      ></column-chart>
      Asistencias por motivo
      <pie-chart
        id="5"
        :donut="true"
        :data="[
          ['Primera Sesión PRP', Estadistica.Motivos.SesionPRP1],
          ['Segunda Sesión PRP', Estadistica.Motivos.SesionPRP2],
          ['Toxina Botulínica', Estadistica.Motivos.Toxina],
          ['Control', Estadistica.Motivos.Control]
        ]"
      ></pie-chart>
      Asistencias a citas en cantidad
      <column-chart
        id="6"
        :data="[
          {
            name: 'Asistió',
            data: {
              '': Estadistica.Asistio
            }
          },
          {
            name: 'No Asistió',
            data: {
              '': Estadistica.NoAsistio
            }
          }
        ]"
      ></column-chart>
      Asistencias a citas en porcentaje
      <pie-chart
        id="7"
        suffix="%"
        :precision="3"
        :data="[
          [
            'Asistió',
            (Estadistica.Asistio * 100) / Estadistica.TotalAsistencias
          ],
          [
            'No Asistió',
            (Estadistica.NoAsistio * 100) / Estadistica.TotalAsistencias
          ]
        ]"
      ></pie-chart>

      {{ Estadistica.hombres }}
      {{ Estadistica.mujeres }}
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
      Estadisticas2: {},
      Estadisticas: [],
      citasporcentajechart: {
        "No Asistió": 71,
        Asistió: 29
      }
    };
  },

  //A diferencia de los otros métodos, estos consiguen su información de documentos en específico y no de colleciones como tal lo que permite
  //que los datos seleccionados
  created() {
    this.mostrarestadisticas();
  },
  methods: {
    //El método de mostrarestadisticas se repite a lo largo de todas las estadísticas
    mostrarestadisticas() {
      var docRef = db.collection("Estadisticas").doc("EstadísticasAgenda");
      docRef
        .get()
        .then(doc => {
          this.Estadisticas.push(doc.data());
          console.log("Document data:", this.Estadisticas);
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
