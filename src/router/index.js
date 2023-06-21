import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/homePage.vue'
import Login from '@/views/loginPage.vue'
import Register from '@/views/registerPage'

const routes = [
  {
    path:'/',
    component: Home,
  },
  {
    path:'/login',
    component: Login,
  },
  {
    path:'/register',
    component: Register,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
