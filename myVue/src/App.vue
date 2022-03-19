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
    <!-- <br/>
    <b style="color: red; font-size: 50px;">这是马凯旋的VUE项目</b> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
