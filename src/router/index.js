import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Login from '@/components/login'
import Regin from '@/components/regin'
import Products from '@/components/page/products'
import FAQ from '@/components/page/FAQ'
import Manger from '@/components/page/manger'
import My from '@/components/page/manger/my'
import Send from '@/components/page/manger/send'
import MyHistory from '@/components/page/manger/history'
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
  // 配置路由
  routes: [
    {
      //  path: '/',
      //  name: 'HelloWorld',
      //  component: HelloWorld
      path: '/',
      name: '首页',
      hidden: true,
      component: Home
    },
    {
      path: '/login',
      name: '',
      hidden: true,
      component: Login
    },
    {
      path: '/regin',
      name: '',
      hidden: true,
      component: Regin
    },
    {
      path: '/products',
      name: '商品',
      component: Products
    },
    {
      path: '/FAQ',
      name: 'FAQ使用文档',
      component: FAQ
    },
    {
      path: '/manger',
      name: '我的工作台',
      redirect: '/manger/my',
      component: Manger,
      hasChild: true,
      children: [
        {path: '/manger/my', name: '我的信息', component: My},
        {path: '/manger/send', name: '发货管理', component: Send},
        {path: '/manger/history', name: '发货记录', component: MyHistory}
      ]
    },
    {
      path: '*',
      hidden: true,
      component: Page404
    }
  ]
})
