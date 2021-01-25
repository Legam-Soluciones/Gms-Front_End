<!-- Este pequeño Login servirá para que a no ser que se inicie sesión, nadie pueda ver los archivos almacenados en la base de datos -->
<!-- La única contraseña que está por el momento es:
admin@gmail.com
hola123
 -->
<!-- En caso de querer hacer otra cuenta, puedes activar el componente llamado Register y ejecutarlo desde la página, pero recomiendo
 hacerlo desde Firebase, es mucho más simple y rápido.  -->
<template>
  <div class="container mt-50">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3">Iniciar Sesion en G.M.S</h3>
        <form action="#" @submit.prevent="login">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="e.g. correoelectronico@gmail.com"
                v-model="email"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
              <input class="input" type="password" v-model="password" />
            </div>
          </div>

          <button outlined type="submit" class="button is-primary">
            Iniciar Sesion
          </button>
        </form>

        <div class="notification is-danger mt-10" v-if="error">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/main.js";
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },

  name: "Login",
  // Este método de login toma los campos de Email y Contraseña y se fija si son congruentes con un usuario en la base de datos.
  methods: {
    login() {
      this.error = "";
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.$router.push({ name: "home" });
            console.log(user);
            //this.$router.push({ name: "dashboard" });
            // this.$router.push({ name: "Dashboard" });
          })
          .catch(err => {
            this.error = err.message;
          });
      } else {
        this.error = "Todos los campos son requeridos";
      }
    }
  }
};
</script>
