import { createRouter, createWebHistory , RouteRecordRaw } from 'vue-router'
const routers: readonly RouteRecordRaw[] = [{
    path: '/login',
    name:'Login',
    meta: {
        title: '登录'
    },
    component: () => import('@/views/login.vue')
}, {
    path: '/home',
    name:'Home',
    meta: {
        title: '主页'
    },
    component: () => import('@/views/home.vue')
}]
const router = createRouter({
    routes: routers,
    history: createWebHistory()
})

export default router


