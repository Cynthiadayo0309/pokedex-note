import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import axios from 'axios' 
import VueAxios from 'vue-axios' 

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIcUBmX8QyfqSE_edvfaEB_YM0RMONFQg",
  authDomain: "my-first-prodact.firebaseapp.com",
  databaseURL: "https://my-first-prodact.firebaseio.com",
  projectId: "my-first-prodact",
  storageBucket: "my-first-prodact.appspot.com",
  messagingSenderId: "823179087152",
  appId: "1:823179087152:web:c7c1fa741177bbba830cf5",
  measurementId: "G-TBFKQ28F9H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
