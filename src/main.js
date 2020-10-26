import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import "firebase/firestore";
import VueFirestore from "vue-firestore";
//import InstantSearch from "vue-instantsearch";

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

//export default db;

Vue.config.productionTip = false;

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
