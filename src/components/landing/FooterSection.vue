<template>
  <footer class="bg-farm-brown-900 text-farm-brown-200 py-12">
    <div class="container-custom px-6 sm:px-0 mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div class="sm:col-span-2 md:col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <div
              class="w-8 h-8 bg-farm-white-600 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <img src="/The_Last_Farm.webp" alt="" class="w-10 h-10" />
            </div>
            <h3 class="text-xl font-bold">The Last Farm</h3>
          </div>
          <p class="mb-4 text-sm sm:text-base">
            La experiencia de granja más relajante que jamás hayas vivido.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="w-10 h-10 bg-farm-brown-700 rounded-full flex items-center justify-center hover:bg-farm-white-600 transition-colors"
            >
              <ShareIcon class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-farm-brown-700 rounded-full flex items-center justify-center hover:bg-farm-green-600 transition-colors"
            >
              <ChatBubbleLeftRightIcon class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-farm-brown-700 rounded-full flex items-center justify-center hover:bg-farm-green-600 transition-colors"
            >
              <PhotoIcon class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-4 flex items-center space-x-2 text-white">
            <PlayIcon class="w-4 h-4" />
            <span>Juego</span>
          </h4>
          <ul class="space-y-2 text-sm sm:text-base">
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Descargar</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Características</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Actualizaciones</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">Roadmap</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4 flex items-center space-x-2 text-white">
            <UsersIcon class="w-4 h-4" />
            <span>Comunidad</span>
          </h4>
          <ul class="space-y-2 text-sm sm:text-base">
            <li>
              <a href="#" class="hover:text-white transition-colors">Discord</a>
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">Reddit</a>
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">Forums</a>
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">Wiki</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4 flex items-center space-x-2 text-white">
            <QuestionMarkCircleIcon class="w-4 h-4" />
            <span>Soporte</span>
          </h4>
          <ul class="space-y-2 text-sm sm:text-base">
            <li>
              <a href="#" class="hover:text-white transition-colors">Ayuda</a>
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Contacto</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Bug Reports</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-farm-brown-700 mt-8 pt-8 text-center text-sm text-farm-brown-400"
      >
        <p>&copy; 2025 The Last Farm. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  HomeIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  PlayIcon,
  UsersIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/24/outline";
</script>
