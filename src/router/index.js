import Vue from 'vue'

import VueRouter from 'vue-router'
import Layout from '@/Layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {

        path: '',
        name: 'home',
        component: () => import("@/Home.vue"),
        children: [{
          path: 'productView',
          name: '碳生产率',
          component: () => import("@/view/ProductView.vue")
        },
        {
          path: 'priceView',
          name: '碳交易',
          component: () => import("@/view/PriceView.vue")
        }]
      }

    ]
  }]

const router = new VueRouter(
  {
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  }
)

//导出router实例
export default router