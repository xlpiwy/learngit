<template>
  <div id="app">
    <!-- element-ui 容器布局 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- 头部组件渲染 -->
        <header-ly></header-ly>
      </el-header>

      <!-- 中间主要区域容器 -->
      <el-container>
        <!-- 添加一个element-ui内置的过渡动画 -->
        <transition name="el-zoom-in-center">
          <!-- 通过路由渲染不同内容的页面 -->
          <router-view/>
        </transition>
      </el-container>

      <!-- 底部 -->
      <el-footer>
        <!-- 底部组件渲染 -->
        <footer-ly></footer-ly>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
// 导入组件
import HeaderLy from '@/components/header'
import FooterLy from '@/components/footer'
export default {
  name: 'app',
  components: {
    HeaderLy,
    FooterLy
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030e18;
}
</style>
