import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router';
// import pages from './pages';
import Top from '../views/Top.vue'
import AnimeWatch from '../views/AnimeWatch.vue'
import ToDo from '../views/ToDo.vue'
Vue.use(VueRouter);


const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    // meta: {
    //   id: 0,
    //   desc: 'トップページの説明'
    // },
    component: Top
  },
  // {
  //   path: '/AnimeWatch',
  //   name: 'AnimeWatch',
  //   component: AnimeWatch
  // },
  // {
  //   path: '/ToDo',
  //   name: 'ToDo',
  //   component: ToDo
  // }
]

const route = {
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
}

const router = new VueRouter(route)

export default router