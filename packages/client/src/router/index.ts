import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/home/home.vue'
// import Dashboard from '../views/dashboard/dashboard.vue'
import Layout from '../layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/dashboard/dashboard.vue'),
        }
      ]
    },
    // {
    //   path: '/uindow',
    //   name: 'uindow',
    //   component: () => import('../views/uindow/uindow.vue'),
    // },
    // {
    //   path: '/dialog',
    //   name: 'dialog',
    //   component: () => import('../views/dialog/dialog.vue'),
    // },
  ],
})

export default router
