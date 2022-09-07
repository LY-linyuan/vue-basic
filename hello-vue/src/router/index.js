import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/Main";
import Login from "../views/Login";
import UserProfile from '../views/user/Profile';
import UserList from '../views/user/List';
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },

    {
      path: '/main',
      component: Main, // 嵌套路由
      children: [
        {
          path: '/user/profile/:id',
          name: 'UserProfile',
          component: UserProfile,
          props: true
        },

        {
          path: '/user/list',
          component: UserList
        },

        {
          path: '/goHome',
          redirect: '/main'
        }
      ]
    },

    {
      path: '*',
      component: NotFound
    }
  ]
});

