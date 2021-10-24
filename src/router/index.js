import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import('../views/Welcome.vue')
    },
    {
        path: '/chatroom',
        name: 'ChatRoom',
        component: () => import('../views/ChatRoom')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
