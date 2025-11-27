<template>
  <section
    id="gameplay"
    class="section-padding bg-gradient-to-b from-slate-800 via-slate-900 to-black overflow-hidden relative"
  >
    <!-- Efectos de fondo -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom px-6 sm:px-0 mx-auto relative z-10">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <span class="text-farm-green-400 text-sm font-bold uppercase tracking-widest">Capítulo 4: El Viaje</span>
        <h2 class="text-5xl sm:text-6xl font-black text-white mt-4">
          Inmersión Total
        </h2>
        <p class="text-xl text-gray-400 mt-6">
          Vive la experiencia de pixel art más adictiva y desafiante
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Lado Izquierdo: Descripción -->
        <div class="space-y-8">
          <p class="text-lg text-gray-300 leading-relaxed">
            El gameplay de The Last Farm te sumergirá en un mundo donde cada decisión cuenta. 
            La experiencia es intensa pero accesible, desafiante pero gratificante.
          </p>

          <!-- Feature list -->
          <div class="space-y-4">
            <div class="flex items-center gap-3 p-4 bg-slate-800/50 border border-purple-500/30 rounded-lg hover:border-purple-400/70 transition group">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition">
                <span class="text-white font-black text-sm">✓</span>
              </div>
              <div>
                <h4 class="font-bold text-white">Gráficos Pixel Art Encantadores</h4>
                <p class="text-sm text-gray-400">Cada escena es una obra maestra retro</p>
              </div>
            </div>

            <div class="flex items-center gap-3 p-4 bg-slate-800/50 border border-purple-500/30 rounded-lg hover:border-purple-400/70 transition group">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition">
                <span class="text-white font-black text-sm">✓</span>
              </div>
              <div>
                <h4 class="font-bold text-white">Música Ambiente Atmosférica</h4>
                <p class="text-sm text-gray-400">Soundtrack que cambia con el día y la noche</p>
              </div>
            </div>

            <div class="flex items-center gap-3 p-4 bg-slate-800/50 border border-purple-500/30 rounded-lg hover:border-purple-400/70 transition group">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition">
                <span class="text-white font-black text-sm">✓</span>
              </div>
              <div>
                <h4 class="font-bold text-white">Controles Intuitivos</h4>
                <p class="text-sm text-gray-400">Fácil de aprender, difícil de dominar</p>
              </div>
            </div>

            <div class="flex items-center gap-3 p-4 bg-slate-800/50 border border-purple-500/30 rounded-lg hover:border-purple-400/70 transition group">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition">
                <span class="text-white font-black text-sm">✓</span>
              </div>
              <div>
                <h4 class="font-bold text-white">Rejugabilidad Infinita</h4>
                <p class="text-sm text-gray-400">Cada partida es diferente y desafiante</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Lado Derecho: Carrusel de imágenes -->
        <div
          class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl w-full mx-auto border border-purple-500/20"
        >
          <div class="relative overflow-hidden rounded-xl mb-6">
            <div
              class="flex transition-transform duration-700"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <div
                v-for="(img, index) in images"
                :key="index"
                class="min-w-full h-64 sm:h-80 bg-slate-700 flex items-center justify-center overflow-hidden"
              >
                <img :src="img" class="w-full h-full object-cover" />
              </div>
            </div>

            <button
              @click="prevSlide"
              class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition shadow-lg"
            >
              <ChevronLeftIcon class="w-5 h-5" />
            </button>

            <button
              @click="nextSlide"
              class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition shadow-lg"
            >
              <ChevronRightIcon class="w-5 h-5" />
            </button>

            <!-- Indicadores -->
            <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              <button
                v-for="(img, index) in images"
                :key="index"
                @click="goToSlide(index)"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="
                  currentIndex === index
                    ? 'bg-farm-green-400 w-6'
                    : 'bg-gray-500 hover:bg-gray-400'
                "
              ></button>
            </div>
          </div>

          <!-- Información -->
          <div class="space-y-3">
            <h3 class="text-xl font-black text-white text-center">
              {{ imageLabels[currentIndex] }}
            </h3>
            <p class="text-gray-300 text-center text-sm leading-relaxed">
              {{ imageDescriptions[currentIndex] }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scan lines -->
    <div class="absolute inset-0 pointer-events-none z-20 opacity-10">
      <div class="scan-lines"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const images = [
  "/CultivoCasa.webp",
  "/CasaEspada.webp",
  "/CasaZombie.webp",
  "/ZombieJuego.webp",
];

const imageLabels = [
  "Cultiva tu Granja",
  "Prepárate para la Batalla",
  "Defiende tu Hogar",
  "Enfrenta las Hordas",
];

const imageDescriptions = [
  "Planta y cosecha zanahorias para obtener recursos vitales. Tu supervivencia depende de ello.",
  "Fortalece tus herramientas, mejora tus defensas y prepárate mentalmente para lo que viene.",
  "Protege tu casa de los ataques zombie. Cada estructura cuenta en tu defensa.",
  "Lucha contra oleadas cada vez más difíciles. ¿Cuántas noches puedes sobrevivir?",
];

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentIndex.value =
    currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};
</script>

<style scoped>
.scan-lines {
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  height: 100%;
}
</style>
