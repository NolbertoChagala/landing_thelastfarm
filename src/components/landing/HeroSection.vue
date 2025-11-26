<template>
  <section
    id="home"
    class="pt-20 pb-16 min-h-screen flex items-center overflow-hidden"
  >
    <div class="container-custom px-6 sm:px-0 mx-auto">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div class="space-y-6">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-farm-brown-800 leading-tight"
          >
            Bienvenido a <span class="text-farm-green-600">The Las Farm</span>
          </h1>

          <p
            class="text-base sm:text-lg md:text-xl text-farm-brown-600 leading-relaxed"
          >
            Construye tu granja de ensueño, cultiva increíbles cosechas y vive
            aventuras únicas en este mundo pixelado lleno de magia y
            tranquilidad.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <li
              v-for="link in links"
              :key="link.href"
              class="list-none w-full sm:w-auto"
            >
              <a
                :href="link.href"
                class="btn-farm-primary flex items-center justify-center space-x-2 w-full sm:w-auto py-3"
              >
                <component :is="link.icon" class="w-5 h-5" />
                <span class="text-base sm:text-lg">Instalar ahora</span>
              </a>
            </li>
          </div>

          <div
            class="flex items-center justify-between sm:justify-start sm:space-x-10 text-farm-brown-600 mt-6"
          >
          </div>
        </div>

        <div class="relative flex justify-center w-full">
          <div
            class="bg-gradient-to-br from-farm-green-400 to-farm-green-600 rounded-3xl p-6 sm:p-8 shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
          >
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div
                class="bg-farm-brown-400 rounded-lg p-3 sm:p-4 flex items-center justify-center"
              >
                <HomeIcon class="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <div
                class="bg-farm-green-300 rounded-lg p-3 sm:p-4 flex items-center justify-center"
              >
                <BeakerIcon class="w-6 sm:w-8 h-6 sm:h-8 text-farm-green-800" />
              </div>
              <div
                class="bg-farm-yellow-300 rounded-lg p-3 sm:p-4 flex items-center justify-center"
              >
                <SunIcon class="w-6 sm:w-8 h-6 sm:h-8 text-farm-yellow-800" />
              </div>
              <div
                class="bg-farm-green-300 rounded-lg p-3 sm:p-4 flex items-center justify-center"
              >
                <HeartIcon class="w-6 sm:w-8 h-6 sm:h-8 text-red-600" />
              </div>
              <div
                class="bg-farm-green-300 rounded-lg p-3 sm:p-4 flex items-center justify-center"
              >
                <GiftIcon class="w-6 sm:w-8 h-6 sm:h-8 text-farm-green-800" />
              </div>
              <div
                class="bg-blue-300 rounded-lg p-3 sm:p-4 flex items-center justify-center"
              >
                <CloudIcon class="w-6 sm:w-8 h-6 sm:h-8 text-blue-800" />
              </div>
              <div
                class="bg-farm-brown-300 rounded-lg p-3 sm:p-4 flex items-center justify-center"
              >
                <BuildingStorefrontIcon
                  class="w-6 sm:w-8 h-6 sm:h-8 text-farm-brown-800"
                />
              </div>
              <div
                class="bg-farm-yellow-400 rounded-lg p-3 sm:p-4 flex items-center justify-center"
              >
                <SparklesIcon
                  class="w-6 sm:w-8 h-6 sm:h-8 text-farm-yellow-800"
                />
              </div>
            </div>
          </div>

          <div
            class="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-farm-yellow-400 rounded-full p-3 sm:p-4 shadow-lg"
          >
            <SunIcon class="w-5 sm:w-6 h-5 sm:h-6 text-farm-yellow-800" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PlayIcon,
  PlayCircleIcon,
  UsersIcon,
  StarIcon,
  GiftIcon,
  HomeIcon,
  BeakerIcon,
  SunIcon,
  HeartIcon,
  CloudIcon,
  BuildingStorefrontIcon,
  SparklesIcon,
  ArrowDownTrayIcon,
} from "@heroicons/vue/24/outline";

const links = [{ href: "#download", icon: ArrowDownTrayIcon }];
</script>
