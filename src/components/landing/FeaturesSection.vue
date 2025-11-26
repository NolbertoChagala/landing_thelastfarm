<template>
  <section id="features" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-farm-brown-800 mb-4">
          Características del Juego
        </h2>
        <p class="text-xl text-farm-brown-600">
          Explora las funciones principales de The Last Farm
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Cultivo principal -->
        <div
          class="bg-farm-green-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-farm-green-200 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <BeakerIcon class="w-8 h-8 text-farm-green-700" />
          </div>
          <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">
            Cultivo y Recolección
          </h3>
          <p class="text-farm-brown-600">
            Siembra y recoge tu cultivo principal para mantener tu granja
            activa. Recolecta tantas unidades como puedas mientras te preparas
            para defenderte.
          </p>
        </div>

        <!-- Combate básico -->
        <div
          class="bg-farm-brown-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-farm-brown-200 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <MapIcon class="w-8 h-8 text-farm-brown-700" />
          </div>
          <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">
            Defensa Contra Infectados
          </h3>
          <p class="text-farm-brown-600">
            Enfrenta oleadas de infectados que invaden tu granja. Usa tu espada
            para eliminarlos y proteger tu cultivo.
          </p>
        </div>

        <!-- Progreso del jugador -->
        <div
          class="bg-blue-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <div
            class="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <TrophyIcon class="w-8 h-8 text-blue-700" />
          </div>

          <h3 class="text-2xl font-semibold text-farm-brown-800 mb-4">
            Actualizaciones y Futuras Versiones
          </h3>

          <p class="text-farm-brown-600">
            Mantente al día con las mejoras del juego: nuevas funciones,
            correcciones, contenido adicional y avances en el desarrollo de
            futuras versiones de
            <strong>The Last Farm</strong>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BeakerIcon, MapIcon, TrophyIcon } from "@heroicons/vue/24/outline";
</script>
