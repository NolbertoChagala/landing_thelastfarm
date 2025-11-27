<template>
  <nav class="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-lg border-b border-farm-green-500/30">
    <div class="container-custom px-6 sm:px-0 mx-auto">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center space-x-3">
          <div
            class="w-10 h-10 bg-farm-green-600 rounded-lg flex items-center justify-center overflow-hidden shadow-lg shadow-farm-green-500/50"
          >
            <img
              src="/The_Last_Farm.webp"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-white">
            THE LAST
            <span class="text-farm-green-400">FARM</span>
          </h2>
        </div>

        <ul class="hidden md:flex space-x-6">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="text-gray-300 hover:text-farm-green-400 transition-colors flex items-center space-x-2 font-semibold uppercase text-sm tracking-wide"
            >
              <component :is="link.icon" class="w-4 h-4" />
              <span>{{ link.text }}</span>
            </a>
          </li>
        </ul>

        <button
          @click="toggleMenu"
          class="md:hidden text-gray-300 hover:text-farm-green-400 focus:outline-none transition"
        >
          <component :is="isMenuOpen ? XMarkIcon : Bars3Icon" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <div
      v-show="isMenuOpen"
      class="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-farm-green-500/30 shadow-xl"
    >
      <ul class="flex flex-col py-4 px-6 space-y-3">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            @click="isMenuOpen = false"
            class="text-gray-300 hover:text-farm-green-400 transition-colors flex items-center space-x-3 py-3 font-semibold uppercase text-sm tracking-wide"
          >
            <component :is="link.icon" class="w-5 h-5" />
            <span>{{ link.text }}</span>
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
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const links = [
  { href: "#intro", text: "Intro", icon: PlayIcon },
  { href: "#story", text: "Historia", icon: HomeIcon },
  { href: "#mechanics", text: "Mecánica", icon: PlayIcon },
  { href: "#gameplay", text: "Gameplay", icon: PlayIcon },
  { href: "#gallery", text: "Galería", icon: PhotoIcon },
  { href: "#download", text: "Descargar", icon: ArrowDownTrayIcon },
];
</script>
