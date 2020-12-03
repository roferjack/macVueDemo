<template>
  <div class="leftContainer">
    <!-- <h1>我是左侧导航2</h1> -->
    <el-button type="primary" @click="handleClickToggle" size="mini"
      >切换</el-button
    >
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router
    >
      <el-submenu index="home">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">home</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="about">
        <i class="el-icon-menu"></i>
        <span slot="title">about</span>
      </el-menu-item>
      <el-menu-item index="book" >
        <i class="el-icon-document"></i>
        <span slot="title">book</span>
      </el-menu-item>
      <el-menu-item index="page">
        <i class="el-icon-setting"></i>
        <span slot="title">page</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style lang="scss">
.leftContainer {
  height: 100%;
  background: #fff;
  .el-menu {
    background: #e6e6e6;
    height: 100%;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  created () {
    console.log('$router',this.$route)
  },
  methods: {
    handleClickToggle() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
