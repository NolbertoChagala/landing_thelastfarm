<template>
  <section id="gallery" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-farm-brown-800 mb-4">Capturas del Juego</h2>
        <p class="text-xl text-farm-brown-600">Explora el hermoso mundo pixel art de The Last Farm</p>
      </div>
      
      <div class="relative max-w-4xl mx-auto">
        <div class="overflow-hidden rounded-2xl shadow-2xl">
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

        <button @click="previousSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-farm-brown-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110">
          <ChevronLeftIcon class="w-6 h-6" />
        </button>
        
        <button @click="nextSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-farm-brown-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110">
          <ChevronRightIcon class="w-6 h-6" />
        </button>

        <div class="flex justify-center mt-6 space-x-3">
          <button
            v-for="(image, index) in gameImages"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-farm-green-600' : 'bg-farm-brown-300 hover:bg-farm-brown-400'"
          ></button>
        </div>

        <div class="text-center mt-6">
          <h3 class="text-2xl font-semibold text-farm-brown-800 mb-2">
            {{ gameImages[currentSlide].title }}
          </h3>
          <p class="text-farm-brown-600">
            {{ gameImages[currentSlide].description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const currentSlide = ref(0)
let autoPlayInterval: number | null = null

const gameImages = ref([
  {
    src: '/TheLastFarm.webp',
    alt: 'The Last Farm - Vista general de la granja',
    title: 'Tu Granja Perfecta',
    description: 'Diseña y construye la granja de tus sueños con campos de cultivo, animales y edificios únicos.'
  },
  {
    src: '/NocheJuego.webp',
    alt: 'The Last Farm - Gameplay con personaje',
    title: 'Aventura Diaria',
    description: 'Vive cada día como una nueva aventura, cuidando tus cultivos y explorando el valle.'
  },
  {
    src: '/CasaDia.webp',
    alt: 'The Last Farm - Cosechando cultivos',
    title: 'Cosecha y Expande',
    description: 'Cultiva una variedad de cultivos, vende tus productos y expande tu imperio agrícola.'
  },
  {
    src: '/NocheEspada.webp',
    alt: 'The Last Farm - Animales en la granja',
    title: 'Amigos Animales',
    description: 'Cuida de adorables animales de granja que te ayudarán en tus tareas diarias.'
  },
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % gameImages.value.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? gameImages.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoPlay = () => {
  autoPlayInterval = setInterval(nextSlide, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

onMounted(() => startAutoPlay())
onUnmounted(() => stopAutoPlay())
</script>