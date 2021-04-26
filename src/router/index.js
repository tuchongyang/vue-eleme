import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/cart/index.vue'

const routes = [
  {
    path: '/',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
