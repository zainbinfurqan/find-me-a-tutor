import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import Home from '../pages/Home'
import AddTutor from '../pages/AddTutor'
import Profile from '../pages/Profile'

const routerHistory = createWebHistory()

export const router = createRouter({
    history: routerHistory,
    routes: [
        { path: '/', component: Login },
        { path: '/login', component: Login },
        { path: '/registration', component: Registration },
        { path: '/Home', component: Home },
        { path: '/AddTutor', component: AddTutor },
        { path: '/Profile', component: Profile }
    ]
})