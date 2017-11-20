import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD

import HansRouters from '../router/kk-hans'
// import ZwlRouters from '../router/kk-zwl'

// import HansRouters from '../router/kk-hans'
// import ZwlRouters from './kk-zwl'

// import HuoRouters from '../router/kk-huo'
// import YuanRouters from './kk-yuan'
let routes = HansRouters
// let arr = YuanRouters
// console.log(arr)

// var kkRouters = YuanRouters.concat(HansRouters, HuoRouters, ZwlRouters)
=======
import HansRouters from '../router/kk-hans'
import ZwlRouters from './kk-zwl'
import HuoRouters from '../router/kk-huo'
import YuanRouters from './kk-yuan'

var kkRouters = YuanRouters.concat(HansRouters, HuoRouters, ZwlRouters)
>>>>>>> 8e01534427f124c9611447cce782ef5d10c00656
Vue.use(Router)

export default new Router({
  mode: 'history',
<<<<<<< HEAD
  routes: routes
  // routes: arr
  // routes: [{
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }]
  // kkRouters
=======
  routes: kkRouters
>>>>>>> 8e01534427f124c9611447cce782ef5d10c00656
})
