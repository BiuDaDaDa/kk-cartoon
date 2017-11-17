import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD
import HansRouters from '../router/kk-hans'
// import ZwlRouters from '../router/kk-zwl'
=======
// import HansRouters from '../router/kk-hans'
// import ZwlRouters from './kk-zwl'
>>>>>>> cfd530976135dfa8d83aeea2705f8457dd383561
// import HuoRouters from '../router/kk-huo'
import YuanRouters from './kk-yuan'

<<<<<<< HEAD
let routes = HansRouters

=======
let arr = YuanRouters
console.log(arr)
>>>>>>> cfd530976135dfa8d83aeea2705f8457dd383561
// var kkRouters = YuanRouters.concat(HansRouters, HuoRouters, ZwlRouters)
Vue.use(Router)

export default new Router({
  mode: 'history',
<<<<<<< HEAD
  routes: routes
=======
  routes: arr
  // routes: [{
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }]
>>>>>>> cfd530976135dfa8d83aeea2705f8457dd383561
  // kkRouters
})

// import Vue from 'vue'
// import Router from 'vue-router'
//
// import Clubindex from './kk-hans'

// Vue.use(Router)
//
// let routes = Clubindex
//
// export default new Router({
//   mode: 'history',
//   routes: routes
// })
