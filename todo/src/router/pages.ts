import Top from '../../src/views/Top.vue'
import AnimeWatch from '../../src/views/AnimeWatch.vue'
import ToDo from '../../src/views/ToDo.vue'

const routes = [
  {
    path: '/',
    name: 'トップ',
    meta: {
      id: 0,
      desc: 'トップページの説明'
    },
    component: Top
  },
  {
    path: '/AnimeWatch',
    name: 'アニメ視聴一覧',
    component: AnimeWatch
  },
  {
    path: '/ToDo',
    name: 'タスク一覧',
    component: ToDo
  }
]

export default routes