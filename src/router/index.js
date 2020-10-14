import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../views/layout.vue'),
        children: [
            {
                path: '',
                name: 'index',
                component: () => import('../views/index.vue')
            },
            {
                path: 'test',
                name: 'test',
                component: () => import('../views/Test')
            },
            {
                path: 'test1',
                name: 'test1',
                component: () => import('../views/Test1')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
