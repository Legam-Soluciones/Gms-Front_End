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
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="cedula"
                        label="Cédula"
                        shaped
                        filled
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn outlined color="primary" dark @click="created"
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
          class="d-flex align-center justify-center mx-auto"
          height="700"
          max-width="1000"
          color="grey lighten-3"
        >
          <v-card
            class="d-flex justify-center mb-6"
            outlined
            tile
            height="250"
            width="450"
            center
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
                      class="d-flex align-center justify-center mx-auto"
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
                        <div
                          class="text-center "
                          v-for="Expediente in Expedientes"
                          :key="Expediente.IDExpediente"
                        >
                          <div>
                            <br />
                            <v-icon>person</v-icon>
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
                              @click="deleted(Expediente)"
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
                                      <div
                                        v-for="Expediente in Expedientes"
                                        :key="Expediente.IDExpediente"
                                      >
                                        <v-text-field
                                          v-model="PrimerNombre"
                                          type="text"
                                          label="Primer Nombre"
                                        ></v-text-field>
                                        <v-text-field
                                          v-model="SegundoNombre"
                                          type="text"
                                          label="Segundo Nombre"
                                        ></v-text-field>
                                        <v-text-field
                                          v-model="PrimerApellido"
                                          type="text"
                                          label="Primer Apellido"
                                        ></v-text-field>
                                        <v-text-field
                                          v-model="SegundoApellido"
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
                                          v-model="IDTipoIdentificacion"
                                        ></v-select>
                                        <v-text-field
                                          v-model="NumeroIdentificacion"
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
                                          v-model="Genero"
                                        ></v-select>
                                        <v-text-field
                                          v-model="FechaNacimiento"
                                          type="date"
                                          label="Fecha de nacimiento"
                                        ></v-text-field>
                                        <v-text-field
                                          v-model="Edad"
                                          type="number"
                                          label="Edad"
                                        ></v-text-field>
                                        <v-text-field
                                          v-model="Telefono1CodigoPais"
                                          type="number"
                                          label="Código de país"
                                        ></v-text-field>
                                        <v-text-field
                                          v-model="Telefono1"
                                          type="number"
                                          label="Teléfono"
                                        ></v-text-field>
                                        <v-text-field
                                          v-model="Telefono2CodigoPais"
                                          type="number"
                                          label="Código de país 2"
                                        ></v-text-field>
                                        <v-text-field
                                          v-model="Telefono2"
                                          type="number"
                                          label="Teléfono secundario"
                                        ></v-text-field>
                                        <v-text-field
                                          v-model="Email"
                                          type="text"
                                          label="Correo Electrónico"
                                        ></v-text-field>
                                        <v-btn
                                          color="primay"
                                          class="mr-4"
                                          @click="update(Expediente)"
                                          >Actualizar Expediente</v-btn
                                        >
                                        <v-btn outlined color="primary" dark
                                          >Autorellenar</v-btn
                                        >
                                      </div>
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
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import { db } from "@/main";
import Addexpedientes from "./agregarexpedientes.vue";

export default {
  components: {
    Addexpedientes
  },
  data() {
    return {
      PrimerNombre: "",
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
      cedula: "",
      telefono: 0,
      Expedientes: []
    };
  },

  methods: {
    created() {
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
        });
    },
    update(Expediente) {
      const actualizacion = db.collection("Expedientes1").doc(Expediente.id);
      return actualizacion
        .update({
          PrimerNombre: this.PrimerNombre,
          SegundoNombre: this.SegundoNombre,
          PrimerApellido: this.PrimerApellido,
          SegundoApellido: this.SegundoApellido,
          IDTipoIdentificacion: this.IDTipoIdentificacion,
          NumeroIdentificacion: this.NumeroIdentificacion,
          Genero: this.Genero,
          FechaNacimiento: this.FechaNacimiento,
          Edad: this.Edad,
          Telefono1CodigoPais: this.Telefono1CodigoPais,
          Telefono2CodigoPais: this.Telefono2CodigoPais,
          Telefono1: this.Telefono1,
          Telefono2: this.Telefono2,
          Email: this.Email
        })
        .then(function() {
          console.log("Document successfully updated!");
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  }
};
</script>
