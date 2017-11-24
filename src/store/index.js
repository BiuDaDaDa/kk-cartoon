import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    countMoreList: '1'
  },
  mutations: {
    increment (state, tt) {
      state.countMoreList = tt
    }
  }
})
