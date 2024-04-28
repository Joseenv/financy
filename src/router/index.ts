import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/modules/landing/views/LandingPage.vue'

import authRouter from '@/modules/auth/router'
import dasboardRouter from '@/modules/dashboard/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/auth',
      ...authRouter
    },
    {
      path: '/dashboard',
      ...dasboardRouter
    }
  ]
})

export default router
