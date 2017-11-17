import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HansRouters from '../router/kk-hans'
// import ZwlRouters from './kk-zwl'
// import HuoRouters from '../router/kk-huo'
import YuanRouters from './kk-yuan'

let arr = YuanRouters
console.log(arr)
// var kkRouters = YuanRouters.concat(HansRouters, HuoRouters, ZwlRouters)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: arr
  // routes: [{
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }]
})
