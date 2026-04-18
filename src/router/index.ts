import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      'path': '/login',
      'name': 'login',
      meta: {
        title: '登录',
      },
      component: () => import('@/views/login/login.vue'),
    },
    {
      'path': '/',
      'name': 'admin-layout',
      component: () => import('@/layouts/AdminLayout.vue'),
      children: [
        {
          'path': '',
          redirect: 'dashboard'
        },
        {
          'path': 'dashboard',
          'name': 'dashboard',
          component: () => import('@/views/dashboard/index.vue'),
        }
      ]
    }
  ],
})


router.afterEach((to) => {
  document.title = (to.meta.title as string) || '后台管理系统'
})

export default router
