import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    'path': '/login',
    'name': 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/login.vue'),
  }],
})


router.afterEach((to) => {
  document.title = (to.meta.title as string) || '后台管理系统'
})

export default router
