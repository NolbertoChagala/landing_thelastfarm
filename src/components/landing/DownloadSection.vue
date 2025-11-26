<template>
  <section
    id="download"
    class="section-padding bg-farm-brown-800 text-white py-20"
  >
    <div class="container-custom text-center px-6 sm:px-0">

      <!-- Título principal -->
      <h2 class="text-3xl sm:text-4xl font-bold mb-6">
        Mantente Informado con <span class="text-farm-yellow-400">The Last Farm</span>
      </h2>

      <p class="text-lg sm:text-xl mb-16 text-farm-brown-200 max-w-2xl mx-auto">
        La aplicación complementaria te permite acceder a información útil del juego, 
        conocer novedades importantes, actualizaciones y contenido adicional 
        relacionado con el universo de <strong>The Last Farm</strong>.
      </p>

      <!-- Contenido principal -->
      <div
        class="grid md:grid-cols-2 gap-16 items-center justify-center max-w-5xl mx-auto"
      >
        <!-- Beneficios informativos -->
        <div class="space-y-8 text-left">
          <h3 class="text-2xl font-bold text-farm-yellow-300">
            ¿Qué encontrarás en la app?
          </h3>

          <ul class="space-y-6">

            <li class="flex items-start gap-3">
              <CheckCircleIcon
                class="w-6 h-6 text-farm-green-400 flex-shrink-0 mt-1"
              />
              <span class="text-lg leading-relaxed">
                Datos acerca de <strong>personajes, criaturas</strong> y elementos del juego.
              </span>
            </li>

            <li class="flex items-start gap-3">
              <CheckCircleIcon
                class="w-6 h-6 text-farm-green-400 flex-shrink-0 mt-1"
              />
              <span class="text-lg leading-relaxed">
                Novedades, noticias y <strong>actualizaciones del desarrollo</strong>.
              </span>
            </li>

          </ul>
        </div>

        <!-- QR + Descarga -->
        <div class="flex flex-col items-center space-y-8">
          
          <div class="flex flex-col items-center">
            <p class="text-lg mb-3 text-farm-brown-200">
              Escanea desde tu móvil para descargar:
            </p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://www.mediafire.com/file/6l39ezkzmikdlmz/app-release.apk/file"
              alt="QR de descarga"
              class="w-48 h-48 rounded-lg shadow-lg bg-white p-2"
            />
          </div>

          <!-- Botón descarga -->
          <a
            href="https://www.mediafire.com/file/iy2tzs84ggq9da9/app-release.apk/file"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-farm-green-600 hover:bg-farm-green-500 px-10 py-4 rounded-full transition-all flex items-center justify-center space-x-3 text-lg font-semibold shadow-lg"
          >
            <DevicePhoneMobileIcon class="w-6 h-6" />
            <span>Descargar para Android</span>
          </a>

          <p class="text-sm text-farm-brown-300">
            Versión 1.0 · 45 MB · APK verificada
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircleIcon, DevicePhoneMobileIcon } from "@heroicons/vue/24/outline";
</script>
