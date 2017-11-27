import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    countMoreList: '1',
    // find-More
    gender: 1,
    // 性别
    deploy: 'down',
    // 展开
    kkClubURL: ''
    // club的url
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
    },
    deployGo (state, isDeploy) {
      state.deploy = isDeploy
    },
    clubURLGo (state, clubURL) {
      state.kkClubURL = clubURL
    }
  }
})
