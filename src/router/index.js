import Vue from 'vue'
import Router from 'vue-router'
import HansRouters from '../router/kk-hans'
import ZwlRouters from './kk-zwl'
import HuoRouters from '../router/kk-huo'
import YuanRouters from './kk-yuan'
var kkRouters = YuanRouters.concat(HansRouters, HuoRouters, ZwlRouters)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: kkRouters
})
