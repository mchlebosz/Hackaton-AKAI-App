import {createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Donation from '@/views/Donation.vue'
import Recruitment from '@/views/Recruitment.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: Homepage , component: Homepage },
    { path: '/about', name: About , component: About },
    { path: '/login', name: Login , component: Login },
    { path: '/register', name: Register , component: Register },
    { path: '/donation', name: Donation , component: Donation },
    { path: '/recruitment', name: Recruitment, component: Recruitment}
  ]
})

export default router