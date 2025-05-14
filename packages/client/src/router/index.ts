import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '..//views/home/home.vue'
import Dashboard from '../views/dashboard/dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/uindow',
      name: 'uindow',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/uindow/uindow.vue'),
    },
    {
      path: '/dialog',
      name: 'dialog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dialog/dialog.vue'),
    },
  ],
})

export default router
