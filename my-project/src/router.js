// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/components/HomePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
  {
    path: '/Hello',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
