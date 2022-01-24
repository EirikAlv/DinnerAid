import Vue from 'vue'
import VueRouter from 'vue-router'
import Groceries from '../views/Groceries.vue'
import Recipes from '../views/Recipes.vue'

import { authGuard } from "../auth/authGuard";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
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
