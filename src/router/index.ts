import { createRouter, createWebHistory } from 'vue-router'

import NewsPage from "@/views/NewsPage.vue";
import Authorisation from "@/views/Authorisation.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'enterPage',
      component: Authorisation
    },
    {
      path: '/news',
      name: 'news',
      component: NewsPage
    },
    {
      path: '/department',
      name: 'department',
      component: () => import('../views/DepartmentPage.vue')
    }
    // {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
