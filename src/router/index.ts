import { createRouter, createWebHistory } from 'vue-router'
import Configurator from '../views/Configurator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'configurator',
      component: Configurator
    },
    // {
    //   path: '/configurator',
    //   name: 'configurator2',
    //   component: () => import('../views/Configurator.vue')
    // }
  ]
})

export default router
