import Vue from 'vue'
import VueRouter from 'vue-router'
import Groceries from '../views/Groceries.vue'
import Recipes from '../views/Recipes.vue'
import FrontPage from '../views/FrontPage.vue'

import { authGuard } from "../auth/authGuard";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "FrontPage",
    component: FrontPage,
  },
  {
    path: "/groceries",
    name: "Groceries",
    component: Groceries,
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: Recipes,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
