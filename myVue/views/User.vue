<template>
    <div>
        <h2>ElementUI 说明文档</h2>
        <el-container style="height: 750px; border: 1px solid rgb(180, 178, 178)">
  <el-aside width="250px" style="background-color: rgb(234, 235, 236)">
    <el-menu :default-openeds="['1']"  :default-active="this.$router.path" router >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>ElementUI 指南</template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="1-1">设计原则</el-menu-item>
          <el-menu-item index="1-2">导航</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>ElementUI 开发</template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="/">安装</el-menu-item>
          <el-menu-item index="2-2">快速上手</el-menu-item>
          <el-menu-item index="2-3">国际化</el-menu-item>
          <el-menu-item index="2-4">自定义主题</el-menu-item>
          <el-menu-item index="2-5">内置过度动画</el-menu-item>
        </el-menu-item-group>
        
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>ElementUI 组件</template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="3-1">Layout 布局</el-menu-item>
          <el-menu-item index="3-2">Container 布局容器</el-menu-item>
          <el-menu-item index="3-3">Color 色彩</el-menu-item>
          <el-menu-item index="3-4">Typography 字体</el-menu-item>
          <el-menu-item index="3-5">Icon 图标</el-menu-item>
          <el-menu-item index="3-6">Button 按钮</el-menu-item>
          <el-menu-item index="3-7">Radio 单选框</el-menu-item>
          <el-menu-item index="3-8">Checkbox 多选框</el-menu-item>
          <el-menu-item index="3-9">Input 输入框</el-menu-item>
          <el-menu-item index="3-10">InputNumber 计数器</el-menu-item>
          <el-menu-item index="3-10">Select 选择器</el-menu-item>
          <el-menu-item index="3-10">Cascader 级联选择器</el-menu-item>
          <el-menu-item index="3-10">Switch 开关</el-menu-item>
          <el-menu-item index="3-10">Slider 滑块</el-menu-item>
          <el-menu-item index="3-10">TimePicker 时间选择器</el-menu-item>
          <el-menu-item index="3-10">DatePicker 日期选择器</el-menu-item>
          <el-menu-item index="3-10">DateTimePicker 日期时间选择器</el-menu-item>
          <el-menu-item index="3-10">Upload 上传</el-menu-item>
          <el-menu-item index="3-10">Rate 评分</el-menu-item>
          <el-menu-item index="3-10">ColorPicker 颜色选择器</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title"><i class="el-icon-more"></i>ElementUI 其他</template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="4-1">other1</el-menu-item>
          <el-menu-item index="4-2">other2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>LANQIUXIAOTONG</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <!-- <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址"> -->
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
    </div>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '',
        name: '',
        address: ''
      };
      return {
        tableData: Array(0).fill(item)
      }
    }
  };
</script>
<!-- 
<script>
// import {defineAsyncComponent} from '@vue/composition-api'
export default ({
    name: 'User',
    data(){
        return {}

    }
})

</script> -->
