// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import store from './store'
Vue.config.productionTip = false

Vue.use(iView);
Vue.use(VueAxios,Axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
