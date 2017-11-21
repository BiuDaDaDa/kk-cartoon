import CartonUser from '../../components/kk-user/CartonUser'
import UserNews from '../../components/kk-user/UserNews'
import Inform from '../../components/kk-user/Inform'
import Comment from '../../components/kk-user/Comment'
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
        path: '/userNews/inform',
        name: 'Inform',
        component: Inform
      },
      {
        path: '/userNews/comment',
        name: 'Comment',
        component: Comment
      }
    ]
  }
]
