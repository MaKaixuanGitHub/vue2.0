// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入ElementUI
import ElementUI from 'element-ui'
// 引入ElementUI 样式文件
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// 将ElementUI注入到全局
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
