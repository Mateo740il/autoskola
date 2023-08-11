import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cars from '../views/Cars.vue'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path: '/vehicles',
      name: 'cars',
      component:Cars
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component:SignUp
    }
  ]
})

export default router
