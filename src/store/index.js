import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存放数据
    cityPrice: [],
    allPrice: {},
    count: 0
  },
  mutations: {
    allPriceF(state, arr) {
      state.allPrice = arr
    },
    cityPriceF(state, arr) {
      state.cityPrice = arr
    }
  }
})
