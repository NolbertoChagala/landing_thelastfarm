<template>
  <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
    <div class="container-custom px-6 sm:px-0 mx-auto">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center space-x-2">
          <div
            class="w-8 h-8 bg-farm-white-200 rounded-lg flex items-center justify-center overflow-hidden"
          >
            <img
              src="/The_Last_Farm.webp"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-farm-green-800">
            The Las Farm
          </h2>
        </div>

        <ul class="hidden md:flex space-x-8">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="text-farm-brown-700 hover:text-farm-green-600 transition-colors flex items-center space-x-1"
            >
              <component :is="link.icon" class="w-4 h-4" />
              <span>{{ link.text }}</span>
            </a>
          </li>
        </ul>

        <button
          @click="toggleMenu"
          class="md:hidden text-farm-brown-700 focus:outline-none"
        >
          <component :is="isMenuOpen ? XMarkIcon : Bars3Icon" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <div
      v-show="isMenuOpen"
      class="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg"
    >
      <ul class="flex flex-col py-4 px-6 space-y-4">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            @click="isMenuOpen = false"
            class="text-farm-brown-700 hover:text-farm-green-600 transition-colors flex items-center space-x-3 py-2"
          >
            <component :is="link.icon" class="w-5 h-5" />
            <span class="text-lg">{{ link.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  HomeIcon,
  SparklesIcon,
  PlayIcon,
  PhotoIcon,
  ArrowDownTrayIcon,
  Bars3Icon,
  XMarkIcon, // Importé XMarkIcon para cuando el menú está abierto
} from "@heroicons/vue/24/outline";

// Estado para controlar si el menú móvil está abierto
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const links = [
  { href: "#home", text: "Inicio", icon: HomeIcon },
  { href: "#features", text: "Características", icon: SparklesIcon },
  { href: "#gameplay", text: "Gameplay", icon: PlayIcon },
  { href: "#gallery", text: "Galería", icon: PhotoIcon },
  { href: "#download", text: "Descargar", icon: ArrowDownTrayIcon },
];
</script>
