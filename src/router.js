// En el router se deciden las direcciones a las que llevaran los links
// Es importante recordar que los archivos del router están en la carpeta Views y NO en Components
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Agenda from "./views/agenda.vue";
import HelloWorld from "./components/HelloWorld.vue";
import documentos from "./views/documentos.vue";
import expedientes from "./views/expedientes.vue";
import tareas from "./views/tareas.vue";
import estadisticas from "./views/estadisticas.vue";
import finanzas from "./views/Finanzas.vue";
import Inicio from "./views/Inicio.vue";
import Login from "./views/Auth/Login.vue";
import Register from "./views/Auth/Register.vue";
import Dashboard from "./views/Dashboard.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
      // meta: {
      //   requiredAuth: true
      // }
    },
    {
      path: "/Inicio",
      name: "Inicio",
      component: Inicio
      // meta: {
      //   requiredAuth: true
      // }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
      // meta: {
      //   requiredAuth: true
      // }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
      //  meta: {
      // requiredAuth: true
      // }
    },

    {
      path: "/Agenda",
      name: "Agenda",
      component: Agenda
      // meta: {
      //   requiredAuth: true
      // }
    },
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld
      // meta: {
      //   requiredAuth: true
      // }
    },
    {
      path: "/documentos",
      name: "documentos",
      component: documentos
      // meta: {
      //   requiredAuth: true
      // }
    },
    {
      path: "/expedientes",
      name: "expedientes",
      component: expedientes
      // meta: {
      //   requiredAuth: true
      // }
    },
    {
      path: "/tareas",
      name: "tareas",
      component: tareas
      // meta: {
      //   requiredAuth: true
      // }
    },
    {
      path: "/estadisticas",
      name: "estadisticas",
      component: estadisticas
      // meta: {
      //   requiredAuth: true
      // }
    },
    {
      path: "/finanzas",
      name: "finanzas",
      component: finanzas
      // meta: {
      //   requiredAuth: true
      // }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(ruta => ruta.meta.requiredAuth)) {
    const user = firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next({
        name: "login"
      });
    }
  } else {
    next();
  }
});

export default router;
