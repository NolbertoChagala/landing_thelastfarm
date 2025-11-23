<template>
  <section id="features" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-farm-brown-800 mb-4">
          Características del Juego
        </h2>
        <p class="text-xl text-farm-brown-600">
          Descubre todo lo que puedes hacer en The Last Farm
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-farm-green-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-farm-green-200 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <BeakerIcon class="w-8 h-8 text-farm-green-700" />
          </div>
          <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">
            Cultiva Variedades
          </h3>
          <p class="text-farm-brown-600">
            Más de 100 tipos de cultivos diferentes, cada uno con sus propias
            características y temporadas.
          </p>
        </div>

        <div
          class="bg-farm-brown-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-farm-brown-200 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <MapIcon class="w-8 h-8 text-farm-brown-700" />
          </div>
          <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">
            Caza de Infectados
          </h3>
          <p class="text-farm-brown-600">
            Recorre los alrededores, elimina hordas de zombis y limpia tu granja
            de toda amenaza viviente.
          </p>
        </div>

        <div
          class="bg-red-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <TrophyIcon class="w-8 h-8 text-red-700" />
          </div>
          <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">
            Completa Misiones
          </h3>
          <p class="text-farm-brown-600">
            Desafíos diarios, eventos especiales y logros para desbloquear.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BeakerIcon,
  HomeIcon,
  HeartIcon,
  MapIcon,
  UsersIcon,
  TrophyIcon,
} from "@heroicons/vue/24/outline";
</script>
