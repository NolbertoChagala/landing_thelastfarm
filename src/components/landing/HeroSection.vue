<template>
  <section id="story" class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-20">
    <!-- Efecto de fondo épico -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-farm-green-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom px-6 sm:px-0 mx-auto relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Lado Izquierdo: Narrativa -->
        <div class="space-y-8">
          <div>
            <span class="text-farm-green-400 text-sm font-bold uppercase tracking-widest">Capítulo 1: El Comienzo</span>
            <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-3 leading-tight">
              Tu Último
              <span class="block text-farm-green-400 gamer-glow">Refugio</span>
            </h2>
          </div>

          <p class="text-lg text-gray-300 leading-relaxed max-w-xl">
            Hace meses que el mundo colapsó. Los muertos se levantaron, la civilización se desmoronó 
            y los sobrevivientes se convirtieron en leyenda. Ahora, en medio de la desolación, 
            tienes una segunda oportunidad.
          </p>

          <div class="space-y-4">
            <div class="flex items-start gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-farm-green-500/30 rounded-lg hover:border-farm-green-400/70 transition">
              <div class="text-2xl">🌾</div>
              <div>
                <h4 class="font-bold text-white">Una Granja Heredada</h4>
                <p class="text-gray-400 text-sm mt-1">Tu único hogar en este nuevo mundo oscuro</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-farm-green-500/30 rounded-lg hover:border-farm-green-400/70 transition">
              <div class="text-2xl">⚔️</div>
              <div>
                <h4 class="font-bold text-white">Una Espada Oxidada</h4>
                 <p class="text-gray-400 text-sm mt-1">Tu arma para el Modo Noche cuando decidas enfrentar los zombies</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-farm-green-500/30 rounded-lg hover:border-farm-green-400/70 transition">
              <div class="text-2xl">🎮</div>
              <div>
                 <h4 class="font-bold text-white">Dos Modos de Juego</h4>
                 <p class="text-gray-400 text-sm mt-1">Día: siembra y cosecha. Noche: batalla preparada contra hordas</p>
              </div>
            </div>
          </div>

          <a
            href="#mechanics"
            class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-farm-green-500 to-farm-green-600 hover:from-farm-green-400 hover:to-farm-green-500 text-black font-black rounded-lg shadow-2xl shadow-farm-green-500/50 transition transform hover:scale-105 hover:shadow-farm-green-400/70"
          >
            <span>DESCUBRE LA VERDAD</span>
            <ArrowRightIcon class="w-5 h-5" />
          </a>
        </div>

        <!-- Lado Derecho: Visual épico -->
        <div class="relative h-full min-h-96">
          <!-- Tarjeta principal con efecto gamer -->
          <div class="relative">
            <!-- Border animado -->
            <div class="absolute inset-0 bg-gradient-to-r from-farm-green-500/50 via-purple-500/30 to-farm-green-500/50 rounded-2xl blur-lg opacity-75"></div>
            
            <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-farm-green-500/30 shadow-2xl">
              <!-- Imagen principal -->
              <div class="aspect-square bg-slate-700 rounded-xl overflow-hidden mb-6 shadow-lg">
                <img src="/TheLastFarm.webp" alt="Tu granja" class="w-full h-full object-cover" />
              </div>

              <!-- Stats del jugador -->
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-gray-400 text-sm uppercase font-bold">Nivel de Amenaza</span>
                  <span class="text-farm-green-400 font-black">CRÍTICO</span>
                </div>
                <div class="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden border border-slate-600">
                  <div class="h-full bg-gradient-to-r from-farm-yellow-400 via-red-500 to-red-600 w-full animate-pulse"></div>
                </div>

                <div class="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-700">
                  <div class="text-center">
                    <div class="text-2xl font-black text-farm-green-400">100</div>
                    <p class="text-xs text-gray-500 mt-1">CULTIVOS</p>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-black text-red-400">∞</div>
                    <p class="text-xs text-gray-500 mt-1">ENEMIGOS</p>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-black text-purple-400">?</div>
                    <p class="text-xs text-gray-500 mt-1">NOCHES</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Efecto de escaneo -->
    <div class="absolute inset-0 pointer-events-none z-20 opacity-10">
      <div class="scan-lines"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>

<style scoped>
.gamer-glow {
  text-shadow: 0 0 20px rgba(74, 222, 128, 0.8), 0 0 40px rgba(74, 222, 128, 0.4);
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    text-shadow: 0 0 20px rgba(74, 222, 128, 0.8), 0 0 40px rgba(74, 222, 128, 0.4);
  }
  50% {
    text-shadow: 0 0 30px rgba(74, 222, 128, 1), 0 0 60px rgba(74, 222, 128, 0.6);
  }
}

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
