import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from "../firebase/config";

const requireAuth = (to, from, next) => {
    let user = projectAuth.currentUser

    if (user) next()
    else next({ name: "Welcome" })
}

const requireNoAuth = (to, from, next) => {
    let user = projectAuth.currentUser

    if (!user) next()
    else next({ name: "ChatRoom" })
}

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import('../views/Welcome.vue'),
        beforeEnter: requireNoAuth
    },
    {
        path: '/chatroom',
        name: 'ChatRoom',
        component: () => import('../views/ChatRoom'),
        beforeEnter: requireAuth
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
