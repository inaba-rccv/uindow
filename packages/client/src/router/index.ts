import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'


export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    meta: { title: 'Dashboard' },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/dashboard.vue'),
      }
    ]
  },
  {
    path: '/button',
    component: Layout,
    meta: { title: 'Button' },
    children: [
      {
        path: '',
        name: 'button',
        component: () => import('@/views/button/button.vue'),
      }
    ]
  },
  {
    path: '/input',
    component: Layout,
    meta: { title: 'Input' },
    children: [
      {
        path: '',
        name: 'input',
        component: () => import('@/views/input/input.vue'),
      }
    ]
  },
  {
    path: '/slider',
    component: Layout,
    meta: { title: 'Slider' },
    children: [
      {
        path: '',
        name: 'slider',
        component: () => import('@/views/slider/slider.vue'),
      }
    ]
  },
  {
    path: '/uindow',
    component: Layout,
    meta: { title: 'Uindow' },
    children: [
      {
        path: '',
        name: 'uindow',
        component: () => import('@/views/uindow/uindow.vue'),
      }
    ]
  },
  {
    path: '/dialog',
    component: Layout,
    meta: { title: 'Dialog' },
    children: [
      {
        path: '',
        name: 'dialog',
        component: () => import('@/views/dialog/dialog.vue'),
      }
    ]
  },
  {
    path: '/animate',
    component: Layout,
    meta: { title: 'Animate' },
    children: [
      {
        path: '',
        name: 'animate',
        component: () => import('@/views/animate/animate.vue'),
      }
    ]
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
