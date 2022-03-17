import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 引入home页面
// import Home from '../views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')

  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
