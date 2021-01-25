<!--Este pequeño archivo es la barra que es desplegada en la esquina derecha -->

<template>
  <nav>
    <v-navigation-drawer dark app class="accent-2" color="#007096" fixed right>
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
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      isOpen: false,
      user: null
    };
  },
  methods: {
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
