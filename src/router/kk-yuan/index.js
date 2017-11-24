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
import UserInfo from '../../components/kk-user/UserInfo'
import Reply from '../../components/kk-user/aboutUserNews/Reply'
import SendOut from '../../components/kk-user/aboutUserNews/SendOut'
import ReadTicket from '../../components/kk-user/aboutUserWallet/ReadTicket'
import BuyCarton from '../../components/kk-user/aboutUserWallet/BuyCarton'
import BuyingManagement from '../../components/kk-user/aboutUserWallet/BuyingManagement'
import TradeDetail from '../../components/kk-user/aboutUserWallet/TradeDetail'
import UserLogin from '../../components/kk-user/UserLogin'
import UserReg from '../../components/kk-user/UserReg'
import UserForget from '../../components/kk-user/UserForget'
import UserVerify from '../../components/kk-user/UserVerify'

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
  },
  {
    path: '/readTicket',
    name: 'ReadTicket',
    component: ReadTicket
  },
  {
    path: '/buyCarton',
    name: 'BuyCarton',
    component: BuyCarton
  },
  {
    path: '/buyingManagement',
    name: 'BuyingManagement',
    component: BuyingManagement
  },
  {
    path: '/tradeDetail',
    name: 'TradeDetail',
    component: TradeDetail
  },
  {
    path: '/userInfo',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/userLogin',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/userReg',
    name: 'UserReg',
    component: UserReg
  },
  {
    path: '/userForget',
    name: 'UserForget',
    component: UserForget
  },
  {
    path: '/userVerify',
    name: 'UserVerify',
    component: UserVerify
  }
]
