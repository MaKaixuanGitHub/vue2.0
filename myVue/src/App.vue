<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 路由没起作用的原因是必须加下面的router -->
    <router-view/>
    <router-link to="/">
      <el-button type="primary">主页</el-button>
    </router-link>
    <router-link to="/user">
      <el-button type="warning">用户信息</el-button>
    </router-link>
    <!-- <b style="color: red; font-size: 50px;">这是马凯旋的VUE项目</b> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
}
#app {
  height: 100px;
}
</style>
