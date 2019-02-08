import Vue from 'vue'
import App from './App.vue'
import './assets/javascript/rem.js';
import './assets/style/base.css';
import router from './modules/router.js';
import store from './modules/store.js';
import axios from 'axios';
Vue.prototype.$axios=axios;

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
