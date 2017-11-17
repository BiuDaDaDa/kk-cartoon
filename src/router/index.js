import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HansRouters from '../router/kk-hans'
// import ZwlRouters from '../router/kk-zwl'
// import HuoRouters from '../router/kk-huo'
// import YuanRouters from '../router/kk-yuan'

let routes = HansRouters

// var kkRouters = YuanRouters.concat(HansRouters, HuoRouters, ZwlRouters)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: routes
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
