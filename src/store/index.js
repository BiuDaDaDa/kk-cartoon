import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    countMoreList: '1',
    gender: 1
  },
  mutations: {
    increment (state, tt) {
      state.countMoreList = tt
    },
    genderTo (state) {
      if (state.gender === 1) {
        state.gender = 0
      } else {
        state.gender = 1
      }
    }
  }
})
