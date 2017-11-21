import KKCartoon from '../../components/kk-home/KKCartoon.vue'
import KKAttention from '../../components/kk-home/KKAttention.vue'
import KKCartoonTitle from '../../components/kk-home/KKCartoonTitle.vue'
export default [
  {
    path: '/',
    name: 'kkcartoon',
    component: KKCartoon
  },
  {
    path: '/attention',
    name: 'kkattention',
    component: KKAttention
  },
  {
    path: '/kkcartitle',
    name: 'kkcartoontitle',
    component: KKCartoonTitle
  }
]
