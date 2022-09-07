import Vue from 'vue'
import VueRouter from "vue-router";

import Content from "../components/Content";
import Main from "../components/Main";
import Test from "../components/Test";

// 安装路由
Vue.use(VueRouter);

// 配置导出路由
export default new VueRouter({
  routes: [
    {
      // 配置路由的路径
      path: '/content',
      name: 'content',
      // 跳转的组件
      component: Content
    },

    {
      // 配置路由的路径
      path: '/main',
      name: 'main',
      // 跳转的组件
      component: Main
    },

    {
      // 配置路由的路径
      path: '/test',
      // 跳转的组件
      component: Test
    }
  ]
});
