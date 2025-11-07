import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import LandingView from './views/LandingView.vue'
import './style.css'

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingView
    }
  ]
})

// Crear la aplicación
const app = createApp(App)

// Usar plugins
app.use(createPinia())
app.use(router)

// Montar la aplicación
app.mount('#app')