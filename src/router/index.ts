import { createRouter, createWebHistory , RouteRecordRaw } from 'vue-router'
const routers: readonly RouteRecordRaw[] = [{
    path: '/login',
    name:'Login',
    meta: {
        title: '登录'
    },
    component: () => import('@/views/login.vue')
}]
const router = createRouter({
    routes: routers,
    history: createWebHistory()
})

export default router


