<template>
  <section id="features" class="section-padding bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
    <!-- Efecto de fondo -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-farm-green-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/3 left-1/4 w-96 h-96 bg-farm-green-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <span class="text-farm-green-400 text-sm font-bold uppercase tracking-widest">Capítulo 3: Habilidades</span>
        <h2 class="text-5xl sm:text-6xl font-black text-white mt-4">
          Características del
          <span class="block text-farm-green-400">Jugador</span>
        </h2>
        <p class="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
          Domina estas mecánicas para convertirte en el mejor sobreviviente
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-farm-green-500/20 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition"></div>
          <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-farm-green-500/30 hover:border-farm-green-400/70 transition shadow-lg">
            <div class="w-14 h-14 bg-gradient-to-br from-farm-green-500 to-farm-green-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <span class="text-2xl">🌾</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-3">
              Cultivo
            </h3>
            <p class="text-gray-400 mb-4">
              Siembra y cosecha zanahorias para obtener recursos vitales. Tu principal fuente de energía y moneda.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">+EXP</span>
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">+Recursos</span>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-farm-green-500/20 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition"></div>
          <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-farm-green-500/30 hover:border-farm-green-400/70 transition shadow-lg">
            <div class="w-14 h-14 bg-gradient-to-br from-farm-green-500 to-farm-green-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <span class="text-2xl">🔨</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-3">
              Construcción
            </h3>
            <p class="text-gray-400 mb-4">
              Construye defensas y estructuras para proteger tu granja. Cada construcción aumenta tu resistencia.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">+Defensa</span>
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">+Soporte</span>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-farm-green-500/20 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition"></div>
          <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-farm-green-500/30 hover:border-farm-green-400/70 transition shadow-lg">
            <div class="w-14 h-14 bg-gradient-to-br from-farm-green-500 to-farm-green-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <span class="text-2xl">⚔️</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-3">
              Combate
            </h3>
            <p class="text-gray-400 mb-4">
              Domina el arte de la espada. Golpea con precisión, esquiva ataques y vence hordas infinitas.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">+Ataque</span>
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">+Destreza</span>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-farm-green-500/20 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition"></div>
          <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-farm-green-500/30 hover:border-farm-green-400/70 transition shadow-lg">
            <div class="w-14 h-14 bg-gradient-to-br from-farm-green-500 to-farm-green-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <span class="text-2xl">🏰</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-3">
              Defensa
            </h3>
            <p class="text-gray-400 mb-4">
              Protege tu refugio de los ataques. Una granja fuerte resistirá cualquier asedio zombie.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">+HP</span>
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">+Armadura</span>
            </div>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-farm-green-500/20 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition"></div>
          <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-farm-green-500/30 hover:border-farm-green-400/70 transition shadow-lg">
            <div class="w-14 h-14 bg-gradient-to-br from-farm-green-500 to-farm-green-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <span class="text-2xl">⭐</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-3">
              Progresión
            </h3>
            <p class="text-gray-400 mb-4">
              Gana experiencia en cada acción. Desbloquea habilidades y mejoras a medida que subes de nivel.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">+Nivel</span>
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">+Poder</span>
            </div>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-farm-green-500/20 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition"></div>
          <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-farm-green-500/30 hover:border-farm-green-400/70 transition shadow-lg">
            <div class="w-14 h-14 bg-gradient-to-br from-farm-green-500 to-farm-green-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <span class="text-2xl">🌙</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-3">
              Ciclo Infinito
            </h3>
            <p class="text-gray-400 mb-4">
              Cada noche trae nuevos desafíos. El juego continúa infinitamente, sin fin definido, hasta tu caída.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">∞ Noches</span>
              <span class="text-xs bg-farm-green-500/20 text-farm-green-300 px-3 py-1 rounded-full border border-farm-green-500/30">Replayable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No requiere scripts
</script>
