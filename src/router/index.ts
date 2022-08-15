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
    //   path: '/new',
    //   name: 'new',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/NewOrderView.vue')
    // }
  ]
})

export default router
