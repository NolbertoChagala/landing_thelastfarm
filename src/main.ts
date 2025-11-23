import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import LandingView from './views/LandingView.vue'
import './style.css'

import { registerSW } from 'virtual:pwa-register' 

// Registrar Service Worker
registerSW({
  immediate: true,
  onOfflineReady() {
    console.log("PWA lista para usarse offline");
  }
});

// Crear router
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

// Crear aplicación
const app = createApp(App)


// Usar plugins
app.use(createPinia())
app.use(router)

// Montar
app.mount('#app')
