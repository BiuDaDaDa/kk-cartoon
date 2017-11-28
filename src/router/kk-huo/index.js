import KKCartoon from '../../components/kk-home/KKCartoon.vue'
import KKAttention from '../../components/kk-home/KKAttention.vue'
import KKCartoonTitle from '../../components/kk-home/KKCartoonTitle.vue'
import KKSection from '../../components/kk-home/KKSection.vue'
import KKComments from '../../components/kk-home/KKComments.vue'
import KKCommentInfo from '../../components/kk-home/KKCommentInfo.vue'
import KKAuthor from '../../components/kk-home/KKAuthor.vue'
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
    path: '/kkcartitle/:id',
    name: 'kkcartoontitle',
    component: KKCartoonTitle
  },
  {
    path: '/kksection/:id',
    name: 'kksection',
    component: KKSection
  },
  {
    path: '/kkcomments/:id',
    name: 'kkcomment',
    component: KKComments
  },
  {
    path: '/kkcommentinfo/:id',
    name: 'kkcommentinfo',
    component: KKCommentInfo
  },
  {
    path: '/kkauthor/:id',
    name: 'kkauthor',
    component: KKAuthor
  }
]
