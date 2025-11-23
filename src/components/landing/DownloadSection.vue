<template>
  <section id="download" class="section-padding bg-farm-brown-800 text-white">
    <div class="container-custom text-center px-6 sm:px-0">
      <h2 class="text-3xl sm:text-4xl font-bold mb-6">
        ¡Comienza tu Aventura en The Last Farm!
      </h2>
      <p class="text-lg sm:text-xl mb-12 text-farm-brown-200">
        Descarga el juego y vive la experiencia agrícola más relajante y
        encantadora
      </p>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="bg-farm-brown-700 rounded-xl p-6">
          <h3 class="text-2xl font-semibold mb-4">Gratis</h3>
          <div class="text-4xl font-bold mb-4">$0 MXN</div>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center justify-center space-x-2">
              <CheckCircleIcon
                class="w-4 h-4 text-farm-green-400 flex-shrink-0"
              />
              <span>Acceso completo al juego base</span>
            </li>
            <li class="flex items-center justify-center space-x-2">
              <CheckCircleIcon
                class="w-4 h-4 text-farm-green-400 flex-shrink-0"
              />
              <span>Actualizaciones regulares</span>
            </li>
            <li class="flex items-center justify-center space-x-2">
              <CheckCircleIcon
                class="w-4 h-4 text-farm-green-400 flex-shrink-0"
              />
              <span>Comunidad activa</span>
            </li>
          </ul>
          <button class="w-full btn-farm-primary">Descargar Ahora</button>
        </div>

        <div
          class="bg-farm-green-600 rounded-xl p-6 transform scale-100 md:scale-105 shadow-xl md:shadow-none z-10"
        >
          <div
            class="bg-farm-yellow-400 text-farm-brown-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 flex items-center justify-center space-x-1 w-max mx-auto"
          >
            <StarIcon class="w-4 h-4" />
            <span>Más Popular</span>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Premium</h3>
          <div class="text-4xl font-bold mb-4">$99 MXN</div>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center justify-center space-x-2">
              <CheckCircleIcon class="w-4 h-4 text-white flex-shrink-0" />
              <span>Todo lo incluido en la versión Gratis</span>
            </li>
            <li class="flex items-center justify-center space-x-2">
              <CheckCircleIcon class="w-4 h-4 text-white flex-shrink-0" />
              <span>Contenido exclusivo</span>
            </li>
            <li class="flex items-center justify-center space-x-2">
              <CheckCircleIcon class="w-4 h-4 text-white flex-shrink-0" />
              <span>Experiencia sin anuncios</span>
            </li>
            <li class="flex items-center justify-center space-x-2">
              <CheckCircleIcon class="w-4 h-4 text-white flex-shrink-0" />
              <span>Membresía Premium con beneficios</span>
            </li>
          </ul>
          <button
            class="w-full bg-white text-farm-green-600 px-8 py-3 rounded-full font-semibold hover:bg-farm-green-50 transition-colors"
          >
            Obtener Premium
          </button>
        </div>

        <div class="bg-farm-brown-700 rounded-xl p-6">
          <h3 class="text-2xl font-semibold mb-4">Supporter</h3>
          <div class="text-4xl font-bold mb-4">$199 MXN</div>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center justify-center space-x-2">
              <CheckCircleIcon
                class="w-4 h-4 text-farm-green-400 flex-shrink-0"
              />
              <span>Todo lo incluido en Premium</span>
            </li>
            <li class="flex items-center justify-center space-x-2">
              <CheckCircleIcon
                class="w-4 h-4 text-farm-green-400 flex-shrink-0"
              />
              <span>Acceso anticipado a actualizaciones</span>
            </li>
            <li class="flex items-center justify-center space-x-2">
              <CheckCircleIcon
                class="w-4 h-4 text-farm-green-400 flex-shrink-0"
              />
              <span>Cosméticos exclusivos</span>
            </li>
            <li class="flex items-center justify-center space-x-2">
              <CheckCircleIcon
                class="w-4 h-4 text-farm-green-400 flex-shrink-0"
              />
              <span>Créditos extra dentro del juego</span>
            </li>
          </ul>
          <button class="w-full btn-farm-secondary">Apoyar Desarrollo</button>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8"
      >
        <button
          class="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 w-full md:w-auto"
        >
          <DevicePhoneMobileIcon class="w-5 h-5" />
          <span>App Store</span>
        </button>
        <button
          class="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 w-full md:w-auto"
        >
          <DevicePhoneMobileIcon class="w-5 h-5" />
          <span>Google Play</span>
        </button>
        <button
          class="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 w-full md:w-auto"
        >
          <ComputerDesktopIcon class="w-5 h-5" />
          <span>Windows</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  CheckCircleIcon,
  StarIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ArrowDownTrayIcon,
} from "@heroicons/vue/24/outline";
</script>
