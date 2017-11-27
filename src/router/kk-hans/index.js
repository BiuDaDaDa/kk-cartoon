
import Tabs from '@/components/kk-club/Tabs'
import Club from '@/components/kk-club/Club'
import ZuiXin from '@/components/kk-club/ZuiXin'
import PingLun from '@/components/kk-club/PingLun'
import DaPing from '@/components/kk-club/DaPing'
import PingLunTow from '@/components/kk-club/PingLunTow'
import HuiHua from '@/components/kk-club/HuiHua'
import ZuoZhe from '@/components/kk-club/ZuoZhe'
export default [
  {
    path: '/kk-tabs',
    name: 'Tabs',
    component: Tabs,
    children: [
      {
        path: '/kk-club',
        component: Club
      },
      {
        path: '/kk-zuixin',
        component: ZuiXin
      }
    ]
  },
  {
    path: '/kk-club',
    name: 'Club',
    component: Club
  },
  {
    path: '/kk-club',
    name: 'ZuiXin',
    component: ZuiXin
  },
  {
    path: '/kk-pinglun/:myid?/:dataid?',
    name: 'PingLun',
    component: PingLun
  },
  {
    path: '/kk-pingluntow/:myid?/:dataid?',
    name: 'PingLunTow',
    component: PingLunTow
  },
  {
    path: '/kk-daping/:id?',
    name: 'DaPing',
    component: DaPing
  },
  {
    path: '/kk-huihua/:myid?',
    name: 'HuiHua',
    component: HuiHua
  },
  {
    path: '/kk-zuozhe/:userid?',
    name: 'ZuoZhe',
    component: ZuoZhe
  }
]
