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
    component: () => import('@/views/home.vue'),
    children: [{
        path: '/dashboard',
        name:'Dashboard',
        meta: {
            title: '首页'
        },
        component: () => import('@/views/dashboard.vue')
    },{
        path: '/form',
        name:'Form',
        meta: {
            title: '表单'
        },
        component: () => import('@/views/form.vue')
    }]
}]
const router = createRouter({
    routes: routers,
    history: createWebHistory()
})

export default router


