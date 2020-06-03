<template>
<div class="container">
  <el-row>
    <el-col :span="6">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      active-background-color="#ffd04b">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18">
      <el-input
      type="text"
      class="el-input"
      placeholder="请输入商品名"
      v-model="searchName">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button
        type="primary"
        @click="search">
        搜索
      </el-button>
      <router-view></router-view>
    </el-col>
  </el-row>
</div>

</template>
<script>
export default {
  data () {
    return {
      searchName: ''
    }
  },
  methods: {
    search () {
      console.log('search')
    }
  }
}
</script>
<style scoped>
.el-input {
  margin: 20px 0;
  width: 80%;
}

</style>
