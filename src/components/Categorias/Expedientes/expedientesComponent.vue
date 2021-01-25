<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-hover v-slot:default="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="700"
          max-width="500"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            <h3>Busqueda expedientes</h3>
            <br />
            <v-divider></v-divider>
            <v-card class="mx-auto" max-width="400" tile> </v-card>
            <template>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col class="d-flex justify center">
                      <v-text-field
                        v-model.number="cedula"
                        label="Cédula"
                        shaped
                        filled
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn outlined color="primary" dark @click="created()"
                        >Ver Expedientes</v-btn
                      >
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <Addexpedientes />
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </template>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" sm="6">
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          class="d-flex justify-center"
          height="700"
          max-width="1000"
          color="grey lighten-3"
        >
          <div
            class="text-center "
            v-for="Expediente in Expedientes"
            :key="Expediente.IDExpediente"
          >
            <div>
              <v-icon>person</v-icon>
              <br />
              {{ Expediente.PrimerNombre }}
              {{ Expediente.SegundoNombre }}
              {{ Expediente.PrimerApellido }}
              {{ Expediente.SegundoApellido }}
            </div>
            <div>
              <v-icon>credit_card</v-icon>
              <br />Cédula:
              {{ Expediente.NumeroIdentificacion }}
            </div>
            <div>
              <v-icon>phone</v-icon>
              <br />Teléfono: {{ Expediente.Telefono1 }}
            </div>
            <div>
              <v-icon>mail</v-icon><br />
              Email: {{ Expediente.Email }}
            </div>
            <div>
              <template>
                <v-dialog max-height="1200px" width="700px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      outlined
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Ver todo el expediente
                    </v-btn>
                  </template>
                  <v-card
                    :elevation="hover ? 16 : 2"
                    class="d-flex align-center justify-center"
                    height="900"
                    max-width="1000"
                    color="grey lighten-3"
                  >
                    <v-card
                      class="d-flex justify-center mb-6"
                      outlined
                      tile
                      height="650"
                      width="550"
                      center
                    >
                      <!-- <v-card
                        class="d-flex justify-center mb-6"
                        outlined
                        tile
                        height="2500"
                        width="450"
                        center
                      >
                      </v-card> -->
                      <div class="text-center">
                        <div>
                          <br />
                          <v-icon>person</v-icon>
                          <br />
                          {{ Expediente.PrimerNombre }}
                          {{ Expediente.SegundoNombre }}
                          {{ Expediente.PrimerApellido }}
                          {{ Expediente.SegundoApellido }}
                        </div>
                        <div>
                          <br />
                          <v-icon>elderly</v-icon>
                          Edad:
                          {{ Expediente.Edad }}
                        </div>
                        <div>
                          <br />
                          <v-icon>date_range</v-icon>
                          Fecha de Nacimiento:
                          {{ Expediente.FechaNacimiento }}
                          <br />
                          Fecha de Creado:
                          {{ Expediente.FechaCreado }}
                        </div>
                        <div>
                          <br />
                          <v-icon>face</v-icon>
                          Género:
                          {{ Expediente.Genero }}
                        </div>
                        <div>
                          <br />
                          <v-icon>card_membership</v-icon>
                          ID del Expediente:
                          {{ Expediente.IDExpediente }}
                          <br />
                          ID (Tipo de Identificación):
                          {{ Expediente.IDTipoIdentificacion }}
                        </div>
                        <div>
                          <br />
                          Nombre del Convenio:
                          {{ Expediente.NombreConvenio }}
                        </div>
                        <div>
                          <br />
                          <v-icon>attach_money</v-icon>
                          Saldo:
                          {{ Expediente.Saldo }}
                        </div>
                        <div>
                          <br />
                          <v-icon>credit_card</v-icon>
                          Cédula:
                          {{ Expediente.NumeroIdentificacion }}
                        </div>
                        <div>
                          <br />
                          <v-icon>phone</v-icon>
                          Teléfono:
                          {{ Expediente.Telefono1CodigoPais }}
                          {{ Expediente.Telefono1 }}
                          <br />
                          Teléfono secundario:
                          {{ Expediente.Telefono2CodigoPais }}
                          {{ Expediente.Telefono2 }}
                        </div>
                        <div>
                          <br />
                          <v-icon>mail</v-icon>
                          Email: {{ Expediente.Email }}
                        </div>
                        <div>
                          <v-btn
                            outlined
                            color="primary"
                            dark
                            class="mt-4 mb-4 mr-4"
                            @click="
                              deleted(Expediente),
                                deleteEdad(Expediente),
                                deleteGenero(Expediente)
                            "
                            >Eliminar Expediente</v-btn
                          >
                          <template>
                            <v-dialog max-height="1200px" width="700px">
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  v-bind="attrs"
                                  v-on="on"
                                  outlined
                                  color="primary"
                                  class="mt-4 mb-4"
                                >
                                  Actualizar Expedientes
                                </v-btn>
                              </template>
                              <v-card max-height="1200px" width="800px">
                                <v-container>
                                  <v-form>
                                    <v-text-field
                                      v-model="Expediente.PrimerNombre"
                                      type="text"
                                      label="Primer Nombre"
                                    ></v-text-field>
                                    <v-text-field
                                      v-model="Expediente.SegundoNombre"
                                      type="text"
                                      label="Segundo Nombre"
                                    ></v-text-field>
                                    <v-text-field
                                      v-model="Expediente.PrimerApellido"
                                      type="text"
                                      label="Primer Apellido"
                                    ></v-text-field>
                                    <v-text-field
                                      v-model="Expediente.SegundoApellido"
                                      type="text"
                                      label="Segundo Apellido"
                                    ></v-text-field>
                                    <v-select
                                      :items="[
                                        'Cédula de Identidad',
                                        'Extranjero',
                                        'DIMEX',
                                        'Menor de Edad'
                                      ]"
                                      label="Seleccionar Identificación"
                                      v-model="Expediente.IDTipoIdentificacion"
                                    ></v-select>
                                    <v-text-field
                                      v-model="Expediente.NumeroIdentificacion"
                                      type="number"
                                      label="Identificación"
                                    ></v-text-field>
                                    <v-select
                                      :items="[
                                        'Femenino',
                                        'Masculino',
                                        'No especifica'
                                      ]"
                                      label="Género"
                                      v-model="Expediente.Genero"
                                    ></v-select>
                                    <v-text-field
                                      v-model="Expediente.FechaNacimiento"
                                      type="date"
                                      label="Fecha de nacimiento"
                                    ></v-text-field>
                                    <v-text-field
                                      v-model="Expediente.Edad"
                                      type="number"
                                      label="Edad"
                                    ></v-text-field>
                                    <v-text-field
                                      v-model="Expediente.Telefono1CodigoPais"
                                      type="number"
                                      label="Código de país"
                                    ></v-text-field>
                                    <v-text-field
                                      v-model="Expediente.Telefono1"
                                      type="number"
                                      label="Teléfono"
                                    ></v-text-field>
                                    <v-text-field
                                      v-model="Expediente.Telefono2CodigoPais"
                                      type="number"
                                      label="Código de país 2"
                                    ></v-text-field>
                                    <v-text-field
                                      v-model="Expediente.Telefono2"
                                      type="number"
                                      label="Teléfono secundario"
                                    ></v-text-field>
                                    <v-text-field
                                      v-model="Expediente.Email"
                                      type="text"
                                      label="Correo Electrónico"
                                    ></v-text-field>
                                    <v-btn
                                      color="primay"
                                      class="mr-4"
                                      @click="update(Expediente)"
                                      >Actualizar Expediente</v-btn
                                    >
                                  </v-form>
                                </v-container>
                              </v-card>
                            </v-dialog>
                          </template>
                        </div>
                      </div>
                    </v-card>
                  </v-card>
                </v-dialog>
              </template>
            </div>
          </div>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import { db } from "@/main";
import { decrement } from "@/main.js";
import { statsRef } from "@/main.js";
import Addexpedientes from "./agregarexpedientes.vue";

export default {
  components: {
    Addexpedientes
  },
  data: () => ({
    PrimerNombre: null,
    SegundoNombre: null,
    PrimerApellido: null,
    SegundoApellido: null,
    IDTipoIdentificacion: null,
    NumeroIdentificacion: null,
    Genero: null,
    FechaNacimiento: null,
    Edad: null,
    Telefono1CodigoPais: null,
    Telefono2CodigoPais: null,
    Telefono1: null,
    Telefono2: null,
    Email: null,
    dialog: false,
    cedula: null,
    telefono: 0,
    Expedientes: []
  }),
  methods: {
    created() {
      this.Expedientes = [];
      db.collection("Expedientes1")
        .where("NumeroIdentificacion", "==", this.cedula)
        .onSnapshot(res => {
          const changes = res.docChanges();
          changes.forEach(change => {
            if (change.type === "added") {
              this.Expedientes.push({
                ...change.doc.data(),
                id: change.doc.id
              });
            }
          });
        });
    },
    deleted(Expediente) {
      db.collection("Expedientes1")
        .doc(Expediente.id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
          alert(
            "No se pudo eliminar el expediente. Por favor intentarlo de nuevo."
          );
        });
    },
    update(Expediente) {
      const actualizacion = db.collection("Expedientes1").doc(Expediente.id);
      return actualizacion
        .update({
          PrimerNombre: Expediente.PrimerNombre,
          SegundoNombre: Expediente.SegundoNombre,
          PrimerApellido: Expediente.PrimerApellido,
          SegundoApellido: Expediente.SegundoApellido,
          IDTipoIdentificacion: Expediente.IDTipoIdentificacion,
          NumeroIdentificacion: Expediente.NumeroIdentificacion,
          Genero: Expediente.Genero,
          FechaNacimiento: Expediente.FechaNacimiento,
          Edad: Expediente.Edad,
          Telefono1CodigoPais: Expediente.Telefono1CodigoPais,
          Telefono2CodigoPais: Expediente.Telefono2CodigoPais,
          Telefono1: Expediente.Telefono1,
          Telefono2: Expediente.Telefono2,
          Email: Expediente.Email
        })
        .then(function() {
          console.log("Document successfully updated!");
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          alert(
            "No se pudo actualizar el expediente. Por favor intentarlo de nuevo."
          );
        });
    },
    deleteEdad(Expediente) {
      const batch = db.batch();
      if (Expediente.Edad == "18-24") {
        batch.set(statsRef, { TotalExpedientes: decrement }, { merge: true });
        batch.set(statsRef, { Edades: { Edad1: decrement } }, { merge: true });
        batch.commit();
      }
      if (Expediente.Edad == "25-34") {
        batch.set(statsRef, { TotalExpedientes: decrement }, { merge: true });
        batch.set(statsRef, { Edades: { Edad2: decrement } }, { merge: true });
        batch.commit();
      }
      if (Expediente.Edad == "35-44") {
        batch.set(statsRef, { TotalExpedientes: decrement }, { merge: true });
        batch.set(statsRef, { Edades: { Edad3: decrement } }, { merge: true });
        batch.commit();
      }
      if (Expediente.Edad == "45-54") {
        batch.set(statsRef, { TotalExpedientes: decrement }, { merge: true });
        batch.set(statsRef, { Edades: { Edad4: decrement } }, { merge: true });
        batch.commit();
      }
      if (Expediente.Edad == "55-64") {
        batch.set(statsRef, { TotalExpedientes: decrement }, { merge: true });
        batch.set(statsRef, { Edades: { Edad5: decrement } }, { merge: true });
        batch.commit();
      }
      if (Expediente.Edad == "65+") {
        batch.set(statsRef, { TotalExpedientes: decrement }, { merge: true });
        batch.set(statsRef, { Edades: { Edad6: decrement } }, { merge: true });
        batch.commit();
      }
    },
    deleteGenero(Expediente) {
      const batch = db.batch();
      if (Expediente.Genero == "Masculino") {
        batch.set(statsRef, { hombres: decrement }, { merge: true });
        batch.commit();
      }
      if (Expediente.Genero == "Femenino") {
        batch.set(statsRef, { mujeres: decrement }, { merge: true });
        batch.commit();
      }
    }
  }
};
</script>
