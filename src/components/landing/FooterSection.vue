<template>
  <footer class="bg-black border-t border-slate-700 text-slate-300 py-16 relative overflow-hidden">
    <!-- Efecto de fondo -->
    <div class="absolute inset-0 z-0">
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-farm-green-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom px-6 sm:px-0 mx-auto relative z-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div class="sm:col-span-2 md:col-span-1">
          <div class="flex items-center space-x-3 mb-4">
            <div
              class="w-10 h-10 bg-farm-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-farm-green-500/50"
            >
              <img src="/The_Last_Farm.webp" alt="" class="w-10 h-10" />
            </div>
            <h3 class="text-xl font-black text-white">The Last Farm</h3>
          </div>
          <p class="mb-6 text-sm leading-relaxed">
            Un juego de supervivencia en pixel art donde cada día es una batalla.
            Cultiva, construye y defiende tu hogar contra hordas implacables.
          </p>
          <div class="flex space-x-4">
            <a
              href="/#gallery"
              class="w-10 h-10 bg-slate-800 hover:bg-farm-green-600 rounded-full flex items-center justify-center transition-colors shadow-lg hover:shadow-farm-green-500/50"
              title="Galería"
            >
              <PhotoIcon class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-black mb-4 flex items-center space-x-2 text-white uppercase text-sm tracking-widest">
            <PlayIcon class="w-5 h-5 text-farm-green-400" />
            <span>Juego</span>
          </h4>
          <ul class="space-y-3 text-sm">
            <li>
              <a href="/#mechanics" class="hover:text-farm-green-400 transition-colors"
                >Mecánica</a
              >
            </li>
            <!-- características removed: section no longer exists -->
            <li>
              <a href="/#gameplay" class="hover:text-farm-green-400 transition-colors"
                >Gameplay</a
              >
            </li>
            <li>
              <a href="/#gallery" class="hover:text-farm-green-400 transition-colors"
                >Galería</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-black mb-4 flex items-center space-x-2 text-white uppercase text-sm tracking-widest">
            <UsersIcon class="w-5 h-5 text-farm-green-400" />
            <span>Comunidad</span>
          </h4>
          <ul class="space-y-3 text-sm">
            <li>
              <a href="#" class="hover:text-farm-green-400 transition-colors">Discord</a>
            </li>
            <li>
              <a href="#" class="hover:text-farm-green-400 transition-colors">Twitter</a>
            </li>
            <li>
              <a href="#" class="hover:text-farm-green-400 transition-colors">YouTube</a>
            </li>
            <li>
              <a href="#" class="hover:text-farm-green-400 transition-colors">Twitch</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-black mb-4 flex items-center space-x-2 text-white uppercase text-sm tracking-widest">
            <QuestionMarkCircleIcon class="w-5 h-5 text-farm-green-400" />
            <span>Soporte</span>
          </h4>
          <ul class="space-y-3 text-sm">
            <li>
              <a href="#" class="hover:text-farm-green-400 transition-colors">Ayuda</a>
            </li>
            <li>
              <a href="#" class="hover:text-farm-green-400 transition-colors"
                >Contacto</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-farm-green-400 transition-colors"
                >Reportar Bug</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-farm-green-400 transition-colors">FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-slate-700 pt-8 text-center text-sm text-slate-500"
      >
        <p>&copy; 2025 The Last Farm. Todos los derechos reservados.</p>
        <p class="mt-2 text-xs">Desarrollado con pasión para gamers que aman los desafíos.</p>
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
