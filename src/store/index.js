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
    kkClubURL: '',
    // club的url
    commentInfo: ''
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
    },
    commentInfoTo (state, val) {
      state.commentInfo = val
    }
  }
})
/* 存取
function cun (el) {
  document.cookie = 'ii=' + el
}
function qu () {
  var arrstr = document.cookie.split(';')
  for (var i = 0; i < arrstr.length; i++) {
    var temp = arrstr[i].split('=')
    console.log(temp)
    if (temp[0] === ' ii') {
      console.log('aaa')
      return temp[1]
    }
  }
} */
