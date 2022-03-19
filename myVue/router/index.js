import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 引入home页面
// import Home from '../views/Home.vue'

// 全局使用
Vue.use(Router)


// 创建routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')

  },
  // 配置路由跳转的相关页面
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  }
]

const router = new Router({
  mode: 'history',
  routes
})

// 向外暴露抛出
export default router
