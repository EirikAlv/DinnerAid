import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'

import { authGuard } from "../auth/authGuard";


Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
