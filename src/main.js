// En el main.js se administran todas las importaciones de librerías o archivos. Aquí hasta la llave para el proyecto de Firebase
import Vue from "vue";
import App from "./App.vue";
import App2 from "./App2.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import "firebase/firestore";
import VueFirestore from "vue-firestore";
import VueSignaturePad from "vue-signature-pad";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";

Vue.use(Chartkick.use(Chart));
Vue.config.productionTip = false;
Vue.use(VueSignaturePad);

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAr9hVAg6xDNn8tV2xijQNSUIBFNbPq760",
  authDomain: "gms-backend.firebaseapp.com",
  databaseURL: "https://gms-backend.firebaseio.com",
  projectId: "gms-backend",
  storageBucket: "gms-backend.appspot.com",
  messagingSenderId: "287053044941",
  appId: "1:287053044941:web:651bf72d290b6efc9b5d84"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const increment = firebase.firestore.FieldValue.increment(1);
export const decrement = firebase.firestore.FieldValue.increment(-1);

export const statsRef = db
  .collection("Estadisticas")
  .doc("EstadisticasExpedientes");
export const FacturaRef = db
  .collection("Estadisticas")
  .doc("EstadisticasFactura");
export const ExpedientesRef = db.collection("Expedientes1").doc();
export const IngresosRef = db
  .collection("Estadisticas")
  .doc("EstadisticasIngresos");
export const batch = db.batch();

Vue.config.productionTip = false;

let app = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App2)
    }).$mount(app);
  }
});

Vue.use(VueFirestore, {
  key: "id"
}),
  Vue.use(VueFirestore);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
