<template>
  <section
    id="gameplay"
    class="section-padding bg-gradient-to-r from-farm-green-100 to-farm-yellow-100 overflow-hidden"
  >
    <div class="container-custom px-6 sm:px-0 mx-auto">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl font-bold text-farm-brown-800 leading-tight">
            Gameplay Relajante
          </h2>
          <p class="text-lg text-farm-brown-600">
            Está diseñado para ser una experiencia relajante y satisfactoria. No
            hay presión de tiempo ni combates intensos, solo la tranquilidad de
            la vida rural.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center text-farm-brown-700">
              <CheckCircleIcon
                class="w-5 h-5 text-farm-green-500 mr-3 flex-shrink-0"
              />
              Ritmo de juego pausado y relajante
            </li>
            <li class="flex items-center text-farm-brown-700">
              <CheckCircleIcon
                class="w-5 h-5 text-farm-green-500 mr-3 flex-shrink-0"
              />
              Música ambiente tranquila
            </li>
            <li class="flex items-center text-farm-brown-700">
              <CheckCircleIcon
                class="w-5 h-5 text-farm-green-500 mr-3 flex-shrink-0"
              />
              Gráficos pixel art encantadores
            </li>
          </ul>
        </div>

        <div
          class="bg-farm-brown-800 rounded-2xl p-5 sm:p-8 shadow-2xl w-full mx-auto"
        >
          <div class="relative overflow-hidden rounded-xl">
            <div
              class="flex transition-transform duration-500"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <div
                v-for="(img, index) in images"
                :key="index"
                class="min-w-full h-56 sm:h-64 bg-farm-green-200 flex items-center justify-center overflow-hidden"
              >
                <img :src="img" class="w-full h-full object-cover" />
              </div>
            </div>

            <button
              @click="prevSlide"
              class="absolute left-2 top-1/2 -translate-y-1/2 bg-farm-brown-700/70 text-white p-2 rounded-full hover:bg-farm-brown-600 transition"
            >
              ‹
            </button>

            <button
              @click="nextSlide"
              class="absolute right-2 top-1/2 -translate-y-1/2 bg-farm-brown-700/70 text-white p-2 rounded-full hover:bg-farm-brown-600 transition"
            >
              ›
            </button>
          </div>

          <h3 class="text-center text-farm-green-200 font-semibold mt-4">
            Vista del Juego
          </h3>
          <p class="text-farm-brown-200 text-center text-sm sm:text-base">
            Explora diferentes escenas del mundo mientras disfrutas el estilo
            pixel art.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircleIcon, PlayCircleIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const images = [
  "/CultivoCasa.webp",
  "/CasaEspada.webp",
  "/CasaZombie.webp",
  "/ZombieJuego.webp",
];

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentIndex.value =
    currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1;
};
</script>
