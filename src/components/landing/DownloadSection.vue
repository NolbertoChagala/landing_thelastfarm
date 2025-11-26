<template>
  <section id="download" class="section-padding bg-farm-brown-800 text-white">
    <div class="container-custom text-center px-6 sm:px-0">
      <h2 class="text-3xl sm:text-4xl font-bold mb-6">
        ¡Conéctate con The Last Farm!
      </h2>
      <p class="text-lg sm:text-xl mb-12 text-farm-brown-200">
        Descarga la aplicación complementaria y mantente al día con tus logros,
        progreso, novedades y actualizaciones del juego.
      </p>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Plan Gratis -->
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

        <!-- Plan Premium -->
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

        <!-- Plan Supporter -->
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

      <!-- Botón de descarga -->
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8"
      >
        <a
          href="https://www.mediafire.com/file/6l39ezkzmikdlmz/app-release.apk/file"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 w-full md:w-auto"
        >
          <DevicePhoneMobileIcon class="w-5 h-5" />
          <span>Descargar desde MediaFire para celular</span>
        </a>
      </div>

      
      <div class="mt-10 flex flex-col items-center">
        <p class="text-lg mb-4 text-farm-brown-200">
          Escanea el código QR para descargar en computadora
        </p>

        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://www.mediafire.com/file/6l39ezkzmikdlmz/app-release.apk/file"
          alt="QR de descarga"
          class="w-44 h-44 rounded-lg shadow-lg bg-white p-2"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  CheckCircleIcon,
  StarIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/vue/24/outline";
</script>
