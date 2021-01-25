<!-- Esta es la "plantilla" que se repite siempre en todos los componentes -->
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template>
          <v-list-item :to="{ name: 'home' }">
            <v-list-item-action>
              <div class="my-2">
                <v-btn
                  class="ma-1 white--text"
                  text
                  color="secondary"
                  @click="Inicio()"
                >
                  <v-icon> home </v-icon> Inicio</v-btn
                >
              </div>
            </v-list-item-action>
          </v-list-item>
          <v-row align="center">
            <v-col class="text-center" cols="12" sm="4">
              <div class="my-2">
                <v-btn
                  class="ma-1 white--text"
                  text
                  color="primary"
                  @click="Agenda()"
                >
                  <v-icon> date_range </v-icon> Agenda</v-btn
                >
              </div>

              <div class="my-2">
                <v-btn
                  class="ma-1 white--text"
                  text
                  color="primary"
                  @click="expedientes()"
                >
                  <v-icon> masks </v-icon> Expedientes</v-btn
                >
              </div>
              <div class="my-2">
                <v-btn
                  class="ma-1 white--text"
                  text
                  color="primary"
                  @click="documentos()"
                  ><v-icon> assignment </v-icon> Documentos
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn
                  class="ma-1 white--text"
                  text
                  color="primary"
                  @click="finanzas()"
                  ><v-icon> local_atm </v-icon> Finanzas
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn
                  class="ma-1 white--text"
                  text
                  color="primary"
                  @click="tareas()"
                  ><v-icon> check_box </v-icon> Tareas
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn
                  class="ma-1 white--text"
                  text
                  color="primary"
                  href="https://web.whatsapp.com/"
                  ><v-icon> sms </v-icon> Mensajes
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn
                  class="ma-1 white--text"
                  text
                  color="primary"
                  @click="estadisticas()"
                  ><v-icon> insights </v-icon> Estadísticas
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn class="ma-1 white--text" text color="error"
                  ><v-icon> exit_to_app</v-icon> Salir
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </template>
      </v-list>
    </v-navigation-drawer>
    <nav>
      <v-navigation-drawer
        v-model="drawer2"
        dark
        app
        class="accent-2"
        color="#007096"
        fixed
        right
      >
        <v-layout column>
          <v-flex class="mt-5">
            <div class="d-flex justify-center">
              <v-avatar size="100">
                <img src="@/assets/logo.png" alt="" />
              </v-avatar>
            </div>
          </v-flex>
        </v-layout>
        <p class="white--text subheading m-1 text-center">
          Más Salud Slim Clinic
        </p>
        <v-list rounded dense>
          <v-list-item router to="/login">
            <v-list-item-action>
              1
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Mi Cuenta
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item router to="/">
            <v-list-item-action>
              2
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title @click="logout">
                Salir
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#007096"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down"> </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon @click.stop="drawer2 = !drawer2">apps</v-icon>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-slide-y-transition>
          <router-view />
        </v-slide-y-transition>

        <v-row align="center" justify="center">
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn icon large target="_blank" v-on="on">
                <v-icon large>mdi-code-tags</v-icon>
              </v-btn>
            </template>
            <span>Source</span>
          </v-tooltip>
        </v-row>
      </v-container>

      <v-footer dark height="auto">
        <v-layout justify-center>
          <v-flex text-xs-center>
            <v-card flat item color="primary" class="white--text">
              <v-card-text class=" text-center white--text pt-0">
                MásSaludSlimClinic &copy;2020
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    drawer: false,
    drawer2: false,
    isOpen: false,
    user: null
  }),
  methods: {
    // Cada uno de estos documentos lleva a su sección correspondiente.
    Agenda() {
      this.$router.push({ name: "Agenda" });
    },
    Inicio() {
      this.$router.push({ name: "HelloWorld" });
    },
    documentos() {
      this.$router.push({ name: "documentos" });
    },
    expedientes() {
      this.$router.push({ name: "expedientes" });
    },
    tareas() {
      this.$router.push({ name: "tareas" });
    },
    estadisticas() {
      this.$router.push({ name: "estadisticas" });
    },
    finanzas() {
      this.$router.push({ name: "finanzas" });
    },
    toggleMenu() {
      const status = !this.isOpen;
      this.isOpen = status;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>
