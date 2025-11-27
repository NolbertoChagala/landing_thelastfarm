<template>
  <section id="gallery" class="section-padding bg-gradient-to-b from-slate-900 to-slate-800">
    <div class="container-custom">
      <div class="text-center mb-16">
        <span class="text-farm-green-400 text-sm font-bold uppercase tracking-widest">Capítulo 5: La Galería</span>
        <h2 class="text-5xl sm:text-6xl font-black text-white mt-4 mb-4">
          El Mundo de
          <span class="text-farm-green-400">The Last Farm</span>
        </h2>
        <p class="text-xl text-gray-400">
          Déjate asombrar por el pixel art más encantador del apocalipsis
        </p>
      </div>

      <div class="relative max-w-5xl mx-auto">
        <div class="overflow-hidden rounded-2xl shadow-2xl border border-farm-green-500/30">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(image, index) in gameImages"
              :key="index"
              class="w-full flex-shrink-0"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        <button
          @click="previousSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-white/30"
        >
          <ChevronLeftIcon class="w-6 h-6" />
        </button>

        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-white/30"
        >
          <ChevronRightIcon class="w-6 h-6" />
        </button>

        <div class="flex justify-center mt-6 space-x-3">
          <button
            v-for="(image, index) in gameImages"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300 border border-white/30"
            :class="
              currentSlide === index
                ? 'bg-farm-green-500 w-8'
                : 'bg-gray-600 hover:bg-gray-500'
            "
          ></button>
        </div>

        <div class="text-center mt-8">
          <h3 class="text-2xl font-black text-white mb-3">
            {{ gameImages[currentSlide].title }}
          </h3>
          <p class="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {{ gameImages[currentSlide].description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

const currentSlide = ref(0);
let autoPlayInterval: number | null = null;

const gameImages = ref([
  {
    src: "/TheLastFarm.webp",
    alt: "The Last Farm - Vista general de la granja",
    title: "Tu Último Refugio",
    description:
      "Tu hogar ya está listo: una pequeña granja donde todo comienza. Mantén tu refugio seguro mientras preparas tu espada para sobrevivir. Es todo lo que tienes en este mundo nuevo y hostil.",
  },
  {
    src: "/NocheJuego.webp",
    alt: "The Last Farm - Gameplay nocturno",
    title: "La Oscuridad Cae",
    description:
      "Cuando el sol desaparece en el horizonte, comienza el verdadero terror. Las hordas de zombies salen de sus guaridas y el cielo se tiñe de un púrpura amenazante. ¿Podrás sobrevivir otra noche?",
  },
  {
    src: "/CasaDia.webp",
    alt: "The Last Farm - Casa y cultivo de zanahorias",
    title: "La Paz del Día",
    description:
      "Durante el día, puedes trabajar en paz. Cultiva tus zanahorias, construye defensas y prepárate para cuando vuelva la oscuridad. Este es tu momento para hacerte más fuerte.",
  },
]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % gameImages.value.length;
};

const previousSlide = () => {
  currentSlide.value =
    currentSlide.value === 0
      ? gameImages.value.length - 1
      : currentSlide.value - 1;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

const startAutoPlay = () => {
  autoPlayInterval = setInterval(nextSlide, 5000);
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

onMounted(() => startAutoPlay());
onUnmounted(() => stopAutoPlay());
</script>
