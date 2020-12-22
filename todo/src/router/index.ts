import Vue from 'vue'
import VueRouter from 'vue-router';
import Router from 'vue-router'
import pages from './pages.ts';
Vue.use(Router);

const route = {
  mode: 'history',
  routes: pages
}

const router = new VueRouter(route)

export default router