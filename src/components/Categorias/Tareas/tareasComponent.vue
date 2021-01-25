<!-- El apartado de tareas es simplemente una To-do-list donde se pueden añadir, actualizar y eliminar tareas. -->
<template>
  <v-container>
    <template>
      <v-container fluid>
        <template>
          <v-toolbar class="mb-2" src="@/assets/img12.jpg" dark flat>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
            <v-toolbar-title> Lista de Tareas </v-toolbar-title>
          </v-toolbar>
          <v-row class="d-flex justify-center">
            <v-btn
              outlined
              color="primary"
              dark
              class="mr-4"
              @click="dialog = true"
              >Agregar Tarea</v-btn
            >
          </v-row>
          <v-dialog v-model="dialog" max-width="500">
            <v-card>
              <v-container>
                <v-form onsubmit="return false">
                  <v-text-field
                    v-model="nuevaTarea"
                    type="text"
                    label="Título de la Tarea"
                  ></v-text-field>
                  <v-text-field
                    v-model="responsables"
                    type="text"
                    label="Responsables"
                  ></v-text-field>
                  <v-select
                    :items="['Correo', 'Llamada', 'Pendiente']"
                    label="Tipo"
                    v-model="tipo"
                    type="text"
                  ></v-select>
                  <v-text-field
                    v-model="notas"
                    type="text"
                    label="Notas"
                  ></v-text-field>
                  <v-text-field
                    v-model="vencimiento"
                    type="date"
                    label="Fecha de vencimiento"
                  ></v-text-field>
                  <v-btn
                    type="submit"
                    color="primay"
                    class="mr-4"
                    @click.stop="dialog = false"
                    @click="añadirTarea()"
                    >Crear Cita</v-btn
                  >
                </v-form>
              </v-container>
            </v-card>
          </v-dialog>
          <v-container>
            <v-row>
              <v-col>
                <v-toolbar-title> Tareas por hacer </v-toolbar-title>
                <v-card
                  flat
                  class="pa-3 ma-2 text center"
                  max-width="300"
                  max-height="400"
                  v-for="Tarea in Tareas"
                  :key="Tarea.id"
                >
                  <div v-if="Tarea.estado == true">
                    <div v-if="Tarea.edit == false">
                      <v-row>
                        <v-list-item-title
                          ><p class="text-center">
                            {{ Tarea.Nombre }} <br />Responsables:<br />{{
                              Tarea.Responsables
                            }}<br />
                            Tipo:<br />{{ Tarea.Tipo }}<br />
                            Notas:<br />{{ Tarea.Notas }}<br />
                            Fecha de Vencimiento:<br />{{
                              Tarea.FechadeVencimiento
                            }}<br />
                          </p>
                          <div class="text-center">
                            <v-btn icon color="red" @click="borrarTarea(Tarea)">
                              <v-icon>delete</v-icon>
                            </v-btn>
                            <v-btn
                              icon
                              color="blue"
                              @click="editarTarea(Tarea), (dialog2 = true)"
                            >
                              <v-icon>add_comment</v-icon>
                            </v-btn>
                            <v-btn
                              icon
                              color="green"
                              @click="updateEstadoTarea(Tarea)"
                            >
                              <v-icon>check_circle</v-icon>
                            </v-btn>
                          </div>
                        </v-list-item-title>
                      </v-row>
                    </div>
                  </div>
                  <div v-if="Tarea.edit == true">
                    <v-dialog persistent v-model="dialog2" max-width="500">
                      <v-card>
                        <v-container>
                          <v-form>
                            <v-text-field
                              v-model="Tarea.Nombre"
                              type="text"
                              label="Título de la Tarea"
                            ></v-text-field>
                            <v-text-field
                              v-model="Tarea.Responsables"
                              type="text"
                              label="Responsables"
                            ></v-text-field>
                            <v-select
                              :items="['Correo', 'Llamada', 'Pendiente']"
                              label="Tipo"
                              v-model="Tarea.Tipo"
                              type="text"
                            ></v-select>
                            <v-text-field
                              v-model="Tarea.Notas"
                              type="text"
                              label="Notas"
                            ></v-text-field>
                            <v-text-field
                              v-model="Tarea.FechadeVencimiento"
                              type="date"
                              label="Fecha de vencimiento"
                            ></v-text-field>
                            <v-btn
                              type="submit"
                              color="primay"
                              class="mr-4"
                              @click.stop="dialog2 = false"
                              @click="update(Tarea)"
                              >Guardar</v-btn
                            >
                            <v-btn
                              color="secondary"
                              @click.stop="dialog2 = false"
                              @click="cancelar(Tarea)"
                              >Cancelar</v-btn
                            >
                          </v-form>
                        </v-container>
                      </v-card>
                    </v-dialog>
                  </div>
                </v-card>
              </v-col>
              <v-col>
                <v-toolbar-title> Tareas completadas </v-toolbar-title>
                <v-card
                  class="pa-3 ma-2 text center"
                  max-width="250"
                  flat
                  v-for="Tarea in Tareas"
                  :key="Tarea.id"
                >
                  <div v-if="Tarea.estado == false">
                    <v-row>
                      <v-list-item-title>
                        <p
                          class="black--text text-center text-decoration-line-through"
                        >
                          {{ Tarea.Nombre }} <br />
                          Responsables:<br />{{ Tarea.Responsables }}<br />
                          Notas:<br />{{ Tarea.Notas }}<br />
                          Fecha de Vencimiento:<br />{{
                            Tarea.FechadeVencimiento
                          }}<br />
                        </p>
                        <div class="text-center">
                          <v-btn icon color="red" @click="borrarTarea(Tarea)">
                            <v-icon>delete</v-icon>
                          </v-btn>
                          <v-btn
                            type="submit"
                            icon
                            color="red"
                            @click="updateEstadoTarea(Tarea)"
                          >
                            <v-icon>remove_circle</v-icon>
                          </v-btn>
                        </div>
                      </v-list-item-title>
                    </v-row>
                  </div>
                </v-card>
              </v-col>
            </v-row></v-container
          >
        </template>
        <template v-slot:footer>
          <v-toolbar class="mt-2" src="@/assets/img12.jpg" dark flat>
            <v-toolbar-title class="subheading">
              - Más Salud Slim Clinic -
            </v-toolbar-title>
          </v-toolbar>
        </template>
      </v-container>
    </template>
  </v-container>
</template>

<script>
import { db } from "@/main";
export default {
  data() {
    return {
      Tareas: [],
      nuevaTarea: "",
      responsables: "",
      tipo: "",
      notas: "",
      vencimiento: null,
      edit: false,
      estado: true,
      dialog: false,
      dialog2: false
    };
  },
  mounted() {
    this.getTareas();
  },
  methods: {
    //Este método recupera las tareas desde la base de datos
    getTareas() {
      const Tareas = [];
      db.collection("Tareas").onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === "added") {
            Tareas.push({
              ...change.doc.data(),
              id: change.doc.id
            });
            this.Tareas = Tareas;
          }
        });
      });
    },

    async añadirTarea() {
      try {
        if (this.nuevaTarea != null) {
          db.collection("Tareas").add({
            Nombre: this.nuevaTarea,
            Responsables: this.responsables,
            Tipo: this.tipo,
            Notas: this.notas,
            FechadeVencimiento: this.vencimiento,
            edit: false,
            estado: true
          });
          this.nuevaTarea = "";
          this.responsables = "";
          this.tipo = "";
          this.notas = "";
          this.vencimiento = "";
        } else {
          alert("Error");
        }
      } catch (error) {
        console.log(error);
        alert(
          "No se pudo añadir la tarea. Por favor refresca la página e inténtalo de nuevo"
        );
      }
    },
    async editarTarea(Tarea) {
      try {
        if (this.edit == false) {
          db.collection("Tareas")
            .doc(Tarea.id)
            .update({
              edit: true
            });
          this.getTareas();
        } else {
          alert("Error");
        }
      } catch (error) {
        console.log(error);
        alert(
          "No se pudo editar la tarea. Por favor refresca la página e inténtalo de nuevo"
        );
      }
    },

    async cancelar(Tarea) {
      try {
        if (Tarea.edit == true) {
          db.collection("Tareas")
            .doc(Tarea.id)
            .update({
              edit: false
            });
          this.getTareas();
        } else {
          alert("Error");
        }
      } catch (error) {
        console.log(error);
        alert(
          "No se pudo cancelar la tarea. Por favor refresca la página e inténtalo de nuevo"
        );
      }
    },
    updateEstadoTarea(Tarea) {
      try {
        if (Tarea.estado != null) {
          db.collection("Tareas")
            .doc(Tarea.id)
            .update({
              estado: !Tarea.estado
            });
          this.getTareas();
        } else {
          alert("Error");
        }
      } catch (error) {
        console.log(error);
        alert(
          "No se pudo actualizar la tarea. Por favor refresca la página e inténtalo de nuevo"
        );
      }
    },

    async update(Tarea) {
      try {
        if (Tarea.edit == true) {
          db.collection("Tareas")
            .doc(Tarea.id)
            .update({
              Nombre: Tarea.Nombre,
              Responsables: Tarea.Responsables,
              Tipo: Tarea.Tipo,
              Notas: Tarea.Notas,
              FechadeVencimiento: Tarea.FechadeVencimiento,
              edit: false
            });
          this.getTareas();
        } else {
          alert("Error");
        }
      } catch (error) {
        console.log(error);
        alert(
          "No se pudo actualizar la tarea. Por favor, refresca la página e inténtalo de nuevo"
        );
      }
    },
    async borrarTarea(Tarea) {
      try {
        if (Tarea.edit == false) {
          db.collection("Tareas")
            .doc(Tarea.id)
            .delete();
          this.getTareas();
        } else {
          alert("Error");
        }
      } catch (error) {
        console.log(error);
        alert(
          "No se pudo eliminar la tarea. Por favor, refresca la página e inténtalo de nuevo"
        );
      }
    }
  }
};
</script>
