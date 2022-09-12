import Vue from 'vue'

const eventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $bus: {
    get() {
      return eventBus
    }
  }
})