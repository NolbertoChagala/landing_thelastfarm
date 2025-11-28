<template>
  <section
    id="download"
    class="section-padding bg-gradient-to-b from-black via-slate-900 to-slate-800 py-20 relative overflow-hidden"
  >
    <!-- Efectos de fondo -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-farm-green-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-farm-green-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom text-center px-6 sm:px-0 relative z-10 pb-24 md:pb-20">

      <!-- Título principal -->
      <h2 class="text-5xl sm:text-6xl font-black text-white mb-6">
        Descarga la App
        <span class="text-farm-green-400">Complementaria</span>
      </h2>

      <p class="text-lg sm:text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Mientras jugas The Last Farm, usa nuestra app complementaria para acceder a información vital del juego, 
        <span class="text-farm-green-400 font-semibold">estrategias de supervivencia, noticias y actualizaciones.</span>
      </p>

      <!-- Contenido principal -->
      <div
        class="grid md:grid-cols-2 gap-16 items-center justify-center max-w-5xl mx-auto"
      >
        <!-- Beneficios -->
        <div class="space-y-8 text-left">
          <h3 class="text-2xl font-black text-farm-green-400">
            Lo que obtendrás:
          </h3>

          <ul class="space-y-6">
            <li class="flex items-start gap-4 p-4 bg-slate-800/50 border border-farm-green-500/30 rounded-lg hover:border-farm-green-400/70 transition">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-farm-green-500 to-farm-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-farm-green-500/50">
                <span class="text-white font-black text-sm">✓</span>
              </div>
              <div>
                <h4 class="font-bold text-white">Enciclopedia del Juego</h4>
                <p class="text-sm text-gray-400 mt-1">Información completa sobre zombies, cultivos, armas y estrategias</p>
              </div>
            </li>

            <li class="flex items-start gap-4 p-4 bg-slate-800/50 border border-farm-green-500/30 rounded-lg hover:border-farm-green-400/70 transition">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-farm-green-500 to-farm-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-farm-green-500/50">
                <span class="text-white font-black text-sm">✓</span>
              </div>
              <div>
                <h4 class="font-bold text-white">Noticias y Actualizaciones</h4>
                <p class="text-sm text-gray-400 mt-1">Mantente informado de nuevas features, parches y contenido</p>
              </div>
            </li>

            <li class="flex items-start gap-4 p-4 bg-slate-800/50 border border-farm-green-500/30 rounded-lg hover:border-farm-green-400/70 transition">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-farm-green-500 to-farm-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-farm-green-500/50">
                <span class="text-white font-black text-sm">✓</span>
              </div>
              <div>
                <h4 class="font-bold text-white">Guías de Supervivencia</h4>
                <p class="text-sm text-gray-400 mt-1">Consejos, estrategias y tutoriales para maximizar tus noches</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- QR + Descarga -->
        <div class="flex flex-col items-center space-y-6">
          
          <div class="flex flex-col items-center">
            <p class="text-lg mb-4 text-gray-300 font-semibold">
              Escanea el código QR:
            </p>
            <div class="bg-white p-3 rounded-xl shadow-2xl shadow-farm-green-500/50 border border-farm-green-500/50">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://www.mediafire.com/file/iy2tzs84ggq9da9/app-release.apk/file"
                alt="QR de descarga"
                class="w-40 h-40 sm:w-48 sm:h-48"
              />
            </div>
          </div>

          <!-- Botón descarga - ÉPICO -->
          <a
            href="https://www.mediafire.com/file/iy2tzs84ggq9da9/app-release.apk/file"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative inline-block"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-farm-green-500 via-farm-green-600 to-farm-green-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300 shadow-2xl"></div>
            <div class="relative bg-gradient-to-r from-farm-green-500 to-farm-green-600 hover:from-farm-green-400 hover:to-farm-green-500 px-8 sm:px-12 py-3 sm:py-5 rounded-full transition-all transform group-hover:scale-110 flex items-center justify-center space-x-3 text-lg sm:text-xl font-black text-black shadow-2xl">
              <DevicePhoneMobileIcon class="w-7 h-7" />
              <span>DESCARGAR APP</span>
            </div>
          </a>

          <p class="text-sm text-gray-500 text-center">
            App Complementaria · 45 MB · Android 8.0+
            <br />
            <span class="text-farm-green-400 font-semibold">Descarga gratuita</span>
          </p>

        </div>
      </div>

      <!-- Stats finales -->
      <div class="mt-20 pt-20 border-t border-slate-700">
        <h3 class="text-2xl font-black text-white mb-12">La App te Proporciona</h3>
        <div class="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div class="bg-slate-800/50 border border-farm-green-500/30 rounded-lg p-6 text-center hover:border-farm-green-400/70 transition">
            <div class="text-4xl font-black text-farm-green-400 mb-2">📚</div>
            <p class="text-gray-400 font-semibold">Enciclopedia</p>
          </div>
          <div class="bg-slate-800/50 border border-farm-green-500/30 rounded-lg p-6 text-center hover:border-farm-green-400/70 transition">
            <div class="text-4xl font-black text-farm-green-400 mb-2">📰</div>
            <p class="text-gray-400 font-semibold">Noticias</p>
          </div>
          <div class="bg-slate-800/50 border border-farm-green-500/30 rounded-lg p-6 text-center hover:border-farm-green-400/70 transition">
            <div class="text-4xl font-black text-farm-green-400 mb-2">🎮</div>
            <p class="text-gray-400 font-semibold">Guías</p>
          </div>
          <div class="bg-slate-800/50 border border-farm-green-500/30 rounded-lg p-6 text-center hover:border-farm-green-400/70 transition">
            <div class="text-4xl font-black text-farm-green-400 mb-2">💡</div>
            <p class="text-gray-400 font-semibold">Estrategias</p>
          </div>
        </div>
      </div>

      <!-- Instalación PWA -->
      <div class="mt-20 pt-20 border-t border-slate-700">
        <h3 class="text-2xl font-black text-white mb-12">Instala la Landing como PWA</h3>
        <div class="max-w-3xl mx-auto">
          <div class="bg-slate-800/50 border border-farm-green-500/30 rounded-xl p-8 space-y-6 text-center">
            <p class="text-lg text-gray-300 leading-relaxed">
              Instala esta landing en tu dispositivo y accede sin conexión a internet. 
              <span class="text-farm-green-400 font-semibold">Funciona completamente offline.</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="flex flex-col items-center p-4 bg-slate-700/50 rounded-lg">
                <div class="text-3xl font-black text-farm-green-400 mb-2">📱</div>
                <p class="text-sm text-gray-400 font-semibold">Abre en móvil</p>
              </div>
              <div class="flex flex-col items-center p-4 bg-slate-700/50 rounded-lg">
                <div class="text-3xl font-black text-farm-green-400 mb-2">⬇️</div>
                <p class="text-sm text-gray-400 font-semibold">Presiona instalar</p>
              </div>
              <div class="flex flex-col items-center p-4 bg-slate-700/50 rounded-lg">
                <div class="text-3xl font-black text-farm-green-400 mb-2">✅</div>
                <p class="text-sm text-gray-400 font-semibold">¡Listo! Offline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DevicePhoneMobileIcon } from "@heroicons/vue/24/outline";
</script>
