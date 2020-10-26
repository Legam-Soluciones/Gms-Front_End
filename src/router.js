import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Agenda from "./views/agenda.vue";
import HelloWorld from "./components/HelloWorld.vue";
import documentos from "./views/documentos.vue";
import expedientes from "./views/expedientes.vue";
import tareas from "./views/tareas.vue";
import estadisticas from "./views/estadisticas.vue";
import finanzas from "./views/Finanzas/finanzas.vue";
import prefactura from "./views/Finanzas/prefactura.vue";
import factura from "./views/Finanzas/factura.vue";
import clientes from "./views/Finanzas/clientes.vue";
import recepcion from "./views/Finanzas/recepcion.vue";
import presupuesto from "./views/Finanzas/presupuesto.vue";
import facturacompra from "./views/Finanzas/facturacompra.vue";
import proveedores from "./views/Finanzas/proveedores.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/Agenda",
      name: "Agenda",
      component: Agenda
    },
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/documentos",
      name: "documentos",
      component: documentos
    },
    {
      path: "/expedientes",
      name: "expedientes",
      component: expedientes
    },
    {
      path: "/tareas",
      name: "tareas",
      component: tareas
    },
    {
      path: "/estadisticas",
      name: "estadisticas",
      component: estadisticas
    },
    {
      path: "/finanzas",
      name: "finanzas",
      component: finanzas
    },
    {
      path: "/prefactura",
      name: "prefactura",
      component: prefactura
    },
    {
      path: "/factura",
      name: "factura",
      component: factura
    },
    {
      path: "/clientes",
      name: "clientes",
      component: clientes
    },
    {
      path: "/recepcion",
      name: "recepcion",
      component: recepcion
    },
    {
      path: "/presupuesto",
      name: "presupuesto",
      component: presupuesto
    },
    {
      path: "/facturacompra",
      name: "facturacompra",
      component: facturacompra
    },
    {
      path: "/proveedores",
      name: "proveedores",
      component: proveedores
    }
  ]
});
