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
      },
    ],
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
      },
    ],
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
      },
    ],
  },
  {
    path: '/text',
    component: Layout,
    meta: { title: 'Text' },
    children: [
      {
        path: '',
        name: 'text',
        component: () => import('@/views/text/text.vue'),
      },
    ],
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
      },
    ],
  },
  {
    path: '/progress',
    component: Layout,
    meta: { title: 'Progress' },
    children: [
      {
        path: '',
        name: 'progress',
        component: () => import('@/views/progress/progress.vue'),
      },
    ],
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
      },
    ],
  },
  {
    path: '/message-box',
    component: Layout,
    meta: { title: 'Message Box' },
    children: [
      {
        path: '',
        name: 'message-box',
        component: () => import('@/views/message-box/message-box.vue'),
      },
    ],
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
      },
    ],
  },
  {
    path: '/scrollbar',
    component: Layout,
    meta: { title: 'Scrollbar' },
    children: [
      {
        path: '',
        name: 'scrollbar',
        component: () => import('@/views/scrollbar/scrollbar.vue'),
      },
    ],
  },
  {
    path: '/layout',
    component: Layout,
    meta: { title: 'Layout' },
    children: [
      {
        path: '',
        name: 'layout',
        component: () => import('@/views/layout/layout.vue'),
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
})

export default router
