import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {routes} from './routes';
import axios from 'axios';
import store from './store/store';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

Vue.prototype.$axios = axios

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
