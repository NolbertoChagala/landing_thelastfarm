<!-- filepath: /Users/blxckbxll/Desktop/farm/farm_game/src/views/LandingView.vue -->
<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div class="container-custom">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-farm-green-600 rounded-lg flex items-center justify-center">
              <HomeIcon class="w-5 h-5 text-white" />
            </div>
            <h2 class="text-2xl font-bold text-farm-green-800">Farm Valley</h2>
          </div>
          <ul class="hidden md:flex space-x-8">
            <li><a href="#home" class="text-farm-brown-700 hover:text-farm-green-600 transition-colors flex items-center space-x-1">
              <HomeIcon class="w-4 h-4" />
              <span>Inicio</span>
            </a></li>
            <li><a href="#features" class="text-farm-brown-700 hover:text-farm-green-600 transition-colors flex items-center space-x-1">
              <SparklesIcon class="w-4 h-4" />
              <span>Características</span>
            </a></li>
            <li><a href="#gameplay" class="text-farm-brown-700 hover:text-farm-green-600 transition-colors flex items-center space-x-1">
              <PlayIcon class="w-4 h-4" />
              <span>Gameplay</span>
            </a></li>
            <li><a href="#gallery" class="text-farm-brown-700 hover:text-farm-green-600 transition-colors flex items-center space-x-1">
              <PhotoIcon class="w-4 h-4" />
              <span>Galería</span>
            </a></li>
            <li><a href="#download" class="text-farm-brown-700 hover:text-farm-green-600 transition-colors flex items-center space-x-1">
              <ArrowDownTrayIcon class="w-4 h-4" />
              <span>Descargar</span>
            </a></li>
          </ul>
          <button class="md:hidden text-farm-brown-700">
            <Bars3Icon class="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-24 pb-20 min-h-screen flex items-center">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <h1 class="text-5xl lg:text-6xl font-bold text-farm-brown-800 leading-tight">
              Bienvenido a 
              <span class="text-farm-green-600">Farm Valley</span>
            </h1>
            <p class="text-xl text-farm-brown-600 leading-relaxed">
              Construye tu granja de ensueño, cultiva increíbles cosechas y vive aventuras únicas en este mundo pixelado lleno de magia y tranquilidad.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn-farm-primary flex items-center justify-center space-x-2">
                <PlayIcon class="w-5 h-5" />
                <span>Jugar Ahora</span>
              </button>
              <button class="btn-farm-secondary flex items-center justify-center space-x-2">
                <PlayCircleIcon class="w-5 h-5" />
                <span>Ver Trailer</span>
              </button>
            </div>
            <div class="flex items-center space-x-8 text-farm-brown-600">
              <div class="text-center">
                <div class="text-2xl font-bold text-farm-green-600 flex items-center justify-center space-x-1">
                  <UsersIcon class="w-6 h-6" />
                  <span>500K+</span>
                </div>
                <div class="text-sm">Jugadores</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-farm-green-600 flex items-center justify-center space-x-1">
                  <StarIcon class="w-6 h-6 fill-current" />
                  <span>4.8</span>
                </div>
                <div class="text-sm">Calificación</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-farm-green-600 flex items-center justify-center space-x-1">
                  <GiftIcon class="w-6 h-6" />
                  <span>100+</span>
                </div>
                <div class="text-sm">Cultivos</div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-gradient-to-br from-farm-green-400 to-farm-green-600 rounded-3xl p-8 shadow-2xl">
              <div class="grid grid-cols-4 gap-4">
                <div class="bg-farm-brown-400 rounded-lg p-4 flex items-center justify-center">
                  <HomeIcon class="w-8 h-8 text-white" />
                </div>
                <div class="bg-farm-green-300 rounded-lg p-4 flex items-center justify-center">
                  <BeakerIcon class="w-8 h-8 text-farm-green-800" />
                </div>
                <div class="bg-farm-yellow-300 rounded-lg p-4 flex items-center justify-center">
                  <SunIcon class="w-8 h-8 text-farm-yellow-800" />
                </div>
                <div class="bg-farm-green-300 rounded-lg p-4 flex items-center justify-center">
                  <HeartIcon class="w-8 h-8 text-red-600" />
                </div>
                <div class="bg-farm-green-300 rounded-lg p-4 flex items-center justify-center">
                  <GiftIcon class="w-8 h-8 text-farm-green-800" />
                </div>
                <div class="bg-blue-300 rounded-lg p-4 flex items-center justify-center">
                  <CloudIcon class="w-8 h-8 text-blue-800" />
                </div>
                <div class="bg-farm-brown-300 rounded-lg p-4 flex items-center justify-center">
                  <BuildingStorefrontIcon class="w-8 h-8 text-farm-brown-800" />
                </div>
                <div class="bg-farm-yellow-400 rounded-lg p-4 flex items-center justify-center">
                  <SparklesIcon class="w-8 h-8 text-farm-yellow-800" />
                </div>
              </div>
            </div>
            <div class="absolute -top-4 -right-4 bg-farm-yellow-400 rounded-full p-4 shadow-lg">
              <SunIcon class="w-6 h-6 text-farm-yellow-800" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-farm-brown-800 mb-4">Características del Juego</h2>
          <p class="text-xl text-farm-brown-600">Descubre todo lo que puedes hacer en Farm Valley</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-farm-green-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-farm-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <BeakerIcon class="w-8 h-8 text-farm-green-700" />
            </div>
            <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">Cultiva Variedades</h3>
            <p class="text-farm-brown-600">Más de 100 tipos de cultivos diferentes, cada uno con sus propias características y temporadas.</p>
          </div>
          
          <div class="bg-farm-brown-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-farm-brown-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <HomeIcon class="w-8 h-8 text-farm-brown-700" />
            </div>
            <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">Construye tu Hogar</h3>
            <p class="text-farm-brown-600">Diseña y mejora tu casa, granero y otras estructuras para hacer tu granja única.</p>
          </div>
          
          <div class="bg-farm-yellow-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-farm-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartIcon class="w-8 h-8 text-red-600" />
            </div>
            <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">Cuida Animales</h3>
            <p class="text-farm-brown-600">Vacas, gallinas, cerdos y más animales esperan tu cuidado diario.</p>
          </div>
          
          <div class="bg-blue-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapIcon class="w-8 h-8 text-blue-700" />
            </div>
            <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">Pesca y Explora</h3>
            <p class="text-farm-brown-600">Descubre lagos secretos, cuevas misteriosas y tesoros escondidos.</p>
          </div>
          
          <div class="bg-purple-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <UsersIcon class="w-8 h-8 text-purple-700" />
            </div>
            <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">Conoce Personas</h3>
            <p class="text-farm-brown-600">Interactúa con los habitantes del pueblo y forma amistades duraderas.</p>
          </div>
          
          <div class="bg-red-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrophyIcon class="w-8 h-8 text-red-700" />
            </div>
            <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">Completa Misiones</h3>
            <p class="text-farm-brown-600">Desafíos diarios, eventos especiales y logros para desbloquear.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gameplay Preview -->
    <section id="gameplay" class="section-padding bg-gradient-to-r from-farm-green-100 to-farm-yellow-100">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-farm-brown-800">Gameplay Relajante</h2>
            <p class="text-lg text-farm-brown-600">
              Farm Valley está diseñado para ser una experiencia relajante y satisfactoria. No hay presión de tiempo ni combates intensos, solo la tranquilidad de la vida rural.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center text-farm-brown-700">
                <CheckCircleIcon class="w-5 h-5 text-farm-green-500 mr-3" />
                Ritmo de juego pausado y relajante
              </li>
              <li class="flex items-center text-farm-brown-700">
                <CheckCircleIcon class="w-5 h-5 text-farm-green-500 mr-3" />
                Música ambiente tranquila
              </li>
              <li class="flex items-center text-farm-brown-700">
                <CheckCircleIcon class="w-5 h-5 text-farm-green-500 mr-3" />
                Gráficos pixel art encantadores
              </li>
              <li class="flex items-center text-farm-brown-700">
                <CheckCircleIcon class="w-5 h-5 text-farm-green-500 mr-3" />
                Sistema de clima dinámico
              </li>
            </ul>
          </div>
          
          <div class="bg-farm-brown-800 rounded-2xl p-8 shadow-2xl">
            <div class="bg-farm-green-200 rounded-lg p-6 mb-4">
              <div class="flex justify-center mb-4">
                <PlayCircleIcon class="w-16 h-16 text-farm-green-700" />
              </div>
              <h3 class="text-center text-farm-brown-800 font-semibold">Experiencia Inmersiva</h3>
            </div>
            <p class="text-farm-brown-200 text-center">Sumérgete en un mundo lleno de posibilidades</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Carousel Section -->
    <section id="gallery" class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-farm-brown-800 mb-4">Capturas del Juego</h2>
          <p class="text-xl text-farm-brown-600">Explora el hermoso mundo pixel art de Farm Valley</p>
        </div>
        
        <div class="relative max-w-4xl mx-auto">
          <!-- Carousel Container -->
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

          <!-- Navigation Arrows -->
          <button 
            @click="previousSlide"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-farm-brown-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeftIcon class="w-6 h-6" />
          </button>
          
          <button 
            @click="nextSlide"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-farm-brown-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRightIcon class="w-6 h-6" />
          </button>

          <!-- Indicators -->
          <div class="flex justify-center mt-6 space-x-3">
            <button
              v-for="(image, index) in gameImages"
              :key="index"
              @click="goToSlide(index)"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="currentSlide === index ? 'bg-farm-green-600' : 'bg-farm-brown-300 hover:bg-farm-brown-400'"
            ></button>
          </div>

          <!-- Image Description -->
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

    <!-- Download Section -->
    <section id="download" class="section-padding bg-farm-brown-800 text-white">
      <div class="container-custom text-center">
        <h2 class="text-4xl font-bold mb-6">¡Comienza tu Aventura Ahora!</h2>
        <p class="text-xl mb-12 text-farm-brown-200">
          Descarga Farm Valley y sumérgete en el mundo más relajante de la agricultura
        </p>
        
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="bg-farm-brown-700 rounded-xl p-6">
            <h3 class="text-2xl font-semibold mb-4">Gratis</h3>
            <div class="text-4xl font-bold mb-4">$0</div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center justify-center space-x-2">
                <CheckCircleIcon class="w-4 h-4 text-farm-green-400" />
                <span>Juego completo</span>
              </li>
              <li class="flex items-center justify-center space-x-2">
                <CheckCircleIcon class="w-4 h-4 text-farm-green-400" />
                <span>Actualizaciones gratis</span>
              </li>
              <li class="flex items-center justify-center space-x-2">
                <CheckCircleIcon class="w-4 h-4 text-farm-green-400" />
                <span>Comunidad activa</span>
              </li>
            </ul>
            <button class="w-full btn-farm-primary">Descargar Ahora</button>
          </div>
          
          <div class="bg-farm-green-600 rounded-xl p-6 transform scale-105">
            <div class="bg-farm-yellow-400 text-farm-brown-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 flex items-center justify-center space-x-1">
              <StarIcon class="w-4 h-4" />
              <span>Más Popular</span>
            </div>
            <h3 class="text-2xl font-semibold mb-4">Premium</h3>
            <div class="text-4xl font-bold mb-4">$9.99</div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center justify-center space-x-2">
                <CheckCircleIcon class="w-4 h-4 text-white" />
                <span>Todo lo de la versión gratis</span>
              </li>
              <li class="flex items-center justify-center space-x-2">
                <CheckCircleIcon class="w-4 h-4 text-white" />
                <span>Contenido exclusivo</span>
              </li>
              <li class="flex items-center justify-center space-x-2">
                <CheckCircleIcon class="w-4 h-4 text-white" />
                <span>Sin anuncios</span>
              </li>
              <li class="flex items-center justify-center space-x-2">
                <CheckCircleIcon class="w-4 h-4 text-white" />
                <span>Soporte prioritario</span>
              </li>
            </ul>
            <button class="w-full bg-white text-farm-green-600 px-8 py-3 rounded-full font-semibold hover:bg-farm-green-50 transition-colors">
              Obtener Premium
            </button>
          </div>
          
          <div class="bg-farm-brown-700 rounded-xl p-6">
            <h3 class="text-2xl font-semibold mb-4">Supporter</h3>
            <div class="text-4xl font-bold mb-4">$19.99</div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center justify-center space-x-2">
                <CheckCircleIcon class="w-4 h-4 text-farm-green-400" />
                <span>Todo lo de Premium</span>
              </li>
              <li class="flex items-center justify-center space-x-2">
                <CheckCircleIcon class="w-4 h-4 text-farm-green-400" />
                <span>Acceso anticipado</span>
              </li>
              <li class="flex items-center justify-center space-x-2">
                <CheckCircleIcon class="w-4 h-4 text-farm-green-400" />
                <span>Cosmetics exclusivos</span>
              </li>
              <li class="flex items-center justify-center space-x-2">
                <CheckCircleIcon class="w-4 h-4 text-farm-green-400" />
                <span>Créditos en el juego</span>
              </li>
            </ul>
            <button class="w-full btn-farm-secondary">Apoyar Desarrollo</button>
          </div>
        </div>

        <div class="flex justify-center space-x-8">
          <button class="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
            <DevicePhoneMobileIcon class="w-5 h-5" />
            <span>App Store</span>
          </button>
          <button class="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
            <DevicePhoneMobileIcon class="w-5 h-5" />
            <span>Google Play</span>
          </button>
          <button class="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
            <ComputerDesktopIcon class="w-5 h-5" />
            <span>Windows</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-farm-brown-900 text-farm-brown-200 py-12">
      <div class="container-custom">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-farm-green-600 rounded-lg flex items-center justify-center">
                <HomeIcon class="w-5 h-5 text-white" />
              </div>
              <h3 class="text-xl font-bold">Farm Valley</h3>
            </div>
            <p class="mb-4">La experiencia de granja más relajante que jamás hayas vivido.</p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-farm-brown-700 rounded-full flex items-center justify-center hover:bg-farm-green-600 transition-colors">
                <ShareIcon class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 bg-farm-brown-700 rounded-full flex items-center justify-center hover:bg-farm-green-600 transition-colors">
                <ChatBubbleLeftRightIcon class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 bg-farm-brown-700 rounded-full flex items-center justify-center hover:bg-farm-green-600 transition-colors">
                <PhotoIcon class="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4 flex items-center space-x-2">
              <PlayIcon class="w-4 h-4" />
              <span>Juego</span>
            </h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition-colors">Descargar</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Características</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Actualizaciones</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4 flex items-center space-x-2">
              <UsersIcon class="w-4 h-4" />
              <span>Comunidad</span>
            </h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Reddit</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Forums</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Wiki</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4 flex items-center space-x-2">
              <QuestionMarkCircleIcon class="w-4 h-4" />
              <span>Soporte</span>
            </h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition-colors">Ayuda</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Bug Reports</a></li>
              <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-farm-brown-700 mt-8 pt-8 text-center">
          <p>&copy; 2025 Farm Valley. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  HomeIcon,
  SparklesIcon,
  PlayIcon,
  PhotoIcon,
  ArrowDownTrayIcon,
  Bars3Icon,
  PlayCircleIcon,
  UsersIcon,
  StarIcon,
  GiftIcon,
  BeakerIcon,
  SunIcon,
  HeartIcon,
  CloudIcon,
  BuildingStorefrontIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  MapIcon,
  TrophyIcon
} from '@heroicons/vue/24/outline'

// Carousel state
const currentSlide = ref(0)
let autoPlayInterval: number | null = null

// Game images data
const gameImages = ref([
  {
    src: '/Gemini_Generated_Image_8y0csg8y0csg8y0c.png',
    alt: 'Farm Valley - Vista general de la granja',
    title: 'Tu Granja Perfecta',
    description: 'Diseña y construye la granja de tus sueños con campos de cultivo, animales y edificios únicos.'
  },
  {
    src: '/Gemini_Generated_Image_6vk24q6vk24q6vk2.png',
    alt: 'Farm Valley - Gameplay con personaje',
    title: 'Aventura Diaria',
    description: 'Vive cada día como una nueva aventura, cuidando tus cultivos y explorando el valle.'
  }
])

// Carousel methods
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
  autoPlayInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

// Lifecycle
onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>