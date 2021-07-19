import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from './router/router';
import Paginate from 'vuejs-paginate';
import "materialize-css/dist/css/materialize.css";
Vue.component('paginate', Paginate)
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
