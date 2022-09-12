import Vue from 'vue'
import App from './App.vue'

import * as echarts from 'echarts'
import 'echarts-gl';

import axios from "axios";

import jQuery from 'jquery'
import '@/assets/css/common.css'
import '@/util/js/evenBus.js'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
Vue.use(Element)
// import '@/util/js/china.js'
// import '@/assets/css/common.css'
Vue.prototype.$echarts = echarts
Vue.prototype.$ = jQuery
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
