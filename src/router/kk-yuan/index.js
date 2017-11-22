import CartonUser from '../../components/kk-user/CartonUser'
import UserNews from '../../components/kk-user/UserNews'
import UserWallet from '../../components/kk-user/UserWallet'
import UserAttention from '../../components/kk-user/UserAttention.vue'
import UserCollect from '../../components/kk-user/UserCollect'
import UserHistory from '../../components/kk-user/UserHistory'
import GameCenter from '../../components/kk-user/GameCenter'
import KKStore from '../../components/kk-user/KKStore'
import UserUpdate from '../../components/kk-user/UserUpdate'
import UserSetting from '../../components/kk-user/UserSetting'
import Reply from '../../components/kk-user/Reply'
import SendOut from '../../components/kk-user/SendOut'
export default [
  {
    path: '/user',
    name: 'CartonUser',
    component: CartonUser
  },
  {
    path: '/userNews',
    name: 'UserNews',
    component: UserNews,
    children: [
      {
        path: '/userNews/reply',
        name: 'Reply',
        component: Reply
      },
      {
        path: '/userNews/sendout',
        name: 'SendOut',
        component: SendOut
      }
    ]
  },
  {
    path: '/userWallet',
    name: 'UserWallet',
    component: UserWallet
  },
  {
    path: '/userAttention',
    name: 'UserAttention',
    component: UserAttention
  },
  {
    path: '/userCollect',
    name: 'UserCollect',
    component: UserCollect
  },
  {
    path: '/userHistory',
    name: 'UserHistory',
    component: UserHistory
  },
  {
    path: '/gameCenter',
    name: 'GameCenter',
    component: GameCenter
  },
  {
    path: '/kkStore',
    name: 'KKStore',
    component: KKStore
  },
  {
    path: '/userUpdate',
    name: 'UserUpdate',
    component: UserUpdate
  },
  {
    path: '/userSetting',
    name: 'UserSetting',
    component: UserSetting
  }
]
