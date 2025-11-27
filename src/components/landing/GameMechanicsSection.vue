<template>
  <section id="mechanics" class="relative section-padding bg-black overflow-hidden">
    <!-- Fondos animados -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Encabezado épico -->
      <div class="text-center mb-20">
        <span class="text-farm-green-400 text-sm font-bold uppercase tracking-widest">Capítulo 2: El Sistema</span>
        <h2 class="text-5xl sm:text-6xl md:text-7xl font-black text-white mt-4 leading-tight">
          Dos Modos de
          <span class="block text-red-500 gamer-glow">Combate</span>
        </h2>
        <p class="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
          Modo Día: cultiva y prepárate. Modo Noche: actívalo cuando estés listo para enfrentar hordas zombies.
        </p>
      </div>

      <!-- SECCIÓN DÍA -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div class="space-y-6 order-2 lg:order-1">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-farm-yellow-300 to-farm-yellow-500 rounded-full flex items-center justify-center shadow-2xl shadow-farm-yellow-500/50">
              <SunIcon class="w-8 h-8 text-farm-yellow-900 font-black" />
            </div>
            <div>
              <p class="text-farm-yellow-400 text-sm font-bold uppercase">MODO</p>
              <h3 class="text-4xl font-black text-white">Día</h3>
            </div>
          </div>

          <p class="text-lg text-gray-300 leading-relaxed">
            El Modo Día es tu tiempo de paz. Sin amenazas inmediatas, sin presión de tiempo.
            Tu objetivo es simple pero crucial: cultiva zanahorias, coséchalas, y prepárate mentalmente.
            Cuando termines, podrás avanzar al Modo Noche cuando estés listo.
          </p>

          <div class="space-y-3">
            <div class="flex items-start gap-3 p-4 bg-gradient-to-r from-farm-yellow-900/30 to-transparent border border-farm-yellow-600/50 rounded-lg hover:border-farm-yellow-500 transition">
              <span class="text-2xl">🌾</span>
              <div>
                <h4 class="font-bold text-farm-yellow-300">SIEMBRA ZANAHORIAS</h4>
                <p class="text-sm text-gray-400">Tu única tarea del día. Prepara el suelo y planta semillas</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 bg-gradient-to-r from-farm-yellow-900/30 to-transparent border border-farm-yellow-600/50 rounded-lg hover:border-farm-yellow-500 transition">
              <span class="text-2xl">💧</span>
              <div>
                <h4 class="font-bold text-farm-yellow-300">RIEGA EL CULTIVO</h4>
                <p class="text-sm text-gray-400">Mantén tus zanahorias sanas y vivas hasta la cosecha</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 bg-gradient-to-r from-farm-yellow-900/30 to-transparent border border-farm-yellow-600/50 rounded-lg hover:border-farm-yellow-500 transition">
              <span class="text-2xl">✂️</span>
              <div>
                <h4 class="font-bold text-farm-yellow-300">COSECHA ANTES DEL ANOCHECER</h4>
                <p class="text-sm text-gray-400">Recoge tus zanahorias. Es tu única fuente de vida</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 bg-gradient-to-r from-farm-yellow-900/30 to-transparent border border-farm-yellow-600/50 rounded-lg hover:border-farm-yellow-500 transition">
              <span class="text-2xl">🔓</span>
              <div>
                 <h4 class="font-bold text-farm-yellow-300">DESBLOQUEA MODO NOCHE</h4>
                 <p class="text-sm text-gray-400">Cuando termines, activa el Modo Noche para enfrentar los zombies</p>
              </div>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-farm-yellow-500/50 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition"></div>
            <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-farm-yellow-600/30 shadow-2xl">
              <img src="/TheLastFarm.webp" alt="Día en la granja" class="w-full h-80 object-cover rounded-lg mb-6 shadow-lg" />
              <p class="text-farm-yellow-300 font-bold text-center">Tu refugio bajo el sol protector</p>
            </div>
          </div>
        </div>
      </div>

      <!-- DIVISOR -->
      <div class="my-20 relative">
        <div class="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-6">
          <div class="text-red-600 font-black text-2xl">⚡ TRANSICIÓN ⚡</div>
        </div>
      </div>

      <!-- SECCIÓN NOCHE -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-700 to-red-700 rounded-full flex items-center justify-center shadow-2xl shadow-red-700/50">
              <MoonIcon class="w-8 h-8 text-slate-100 font-black" />
            </div>
            <div>
              <p class="text-red-500 text-sm font-bold uppercase">MODO</p>
              <h3 class="text-4xl font-black text-white">Noche</h3>
            </div>
          </div>

          <p class="text-lg text-gray-300 leading-relaxed">
            El Modo Noche es un apocalipsis preparado. Cuando lo actives, las hordas de zombies atacarán sin piedad, sin tregua, sin fin.
            Tu espada es tu única arma. Tu destreza tu única defensa. 
            <span class="text-farm-green-400 font-semibold">Sobrevive oleadas infinitas y demuestra tu poder.</span>
          </p>

          <div class="space-y-3">
            <div class="flex items-start gap-3 p-4 bg-gradient-to-r from-red-900/30 to-transparent border border-red-600/50 rounded-lg hover:border-red-500 transition">
              <span class="text-2xl">🧟</span>
              <div>
                <h4 class="font-bold text-red-300">HORDAS INFINITAS</h4>
                <p class="text-sm text-gray-400">Oleadas sin fin de zombies hambrientos atacando tu refugio</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 bg-gradient-to-r from-red-900/30 to-transparent border border-red-600/50 rounded-lg hover:border-red-500 transition">
              <span class="text-2xl">⚔️</span>
              <div>
                <h4 class="font-bold text-red-300">COMBATE INTENSO</h4>
                <p class="text-sm text-gray-400">Golpea, esquiva, sobrevive. Tu espada debe trabajar sin parar</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 bg-gradient-to-r from-red-900/30 to-transparent border border-red-600/50 rounded-lg hover:border-red-500 transition">
              <span class="text-2xl">🏰</span>
              <div>
                <h4 class="font-bold text-red-300">DEFIENDE TU GRANJA</h4>
                <p class="text-sm text-gray-400">Protege cada rincón. Los zombies destruirán todo si logran entrar</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 bg-gradient-to-r from-red-900/30 to-transparent border border-red-600/50 rounded-lg hover:border-red-500 transition">
              <span class="text-2xl">⭐</span>
              <div>
                 <h4 class="font-bold text-red-300">DERROTA OLEADAS INFINITAS</h4>
                 <p class="text-sm text-gray-400">Cada oleada que superas es una victoria. ¿Cuál es tu récord?</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-red-700/50 to-purple-700/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition"></div>
            <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-red-600/30 shadow-2xl">
              <div class="absolute top-4 right-4 w-8 h-8 bg-slate-300 rounded-full animate-pulse"></div>
              <img src="/NocheJuego.webp" alt="Noche - Hordas" class="w-full h-80 object-cover rounded-lg mb-6 shadow-lg" />
              <p class="text-red-300 font-bold text-center">La noche trae pesadilla y muerte</p>
            </div>
          </div>
        </div>
      </div>

      <!-- SECUENCIA COMPACTA -->
      <div class="mt-16 pt-12 border-t border-slate-800">
        <h3 class="text-2xl font-black text-center text-white mb-8">Secuencia de Juego</h3>

        <div class="max-w-4xl mx-auto grid grid-cols-3 gap-6 items-center text-center">
          <div>
            <div class="inline-block bg-gradient-to-br from-farm-yellow-400 to-farm-yellow-500 rounded-xl p-3 mb-3">
              <SunIcon class="w-9 h-9 text-farm-yellow-900" />
            </div>
            <h4 class="font-black text-white">Día</h4>
            <p class="text-xs text-gray-400 mt-1">Siembra y prepara recursos</p>
          </div>

          <div class="flex flex-col items-center justify-center">
            <div class="text-3xl text-farm-green-500 font-black mb-2">→</div>
            <div class="text-xs text-gray-400">Decisión</div>
          </div>

          <div>
            <div class="inline-block bg-gradient-to-br from-farm-green-400 to-farm-green-600 rounded-xl p-3 mb-3">
              <BeakerIcon class="w-9 h-9 text-farm-green-900" />
            </div>
            <h4 class="font-black text-white">Preparación</h4>
            <p class="text-xs text-gray-400 mt-1">Afina armas y decide iniciar la noche</p>
          </div>

          <div class="flex items-center justify-center col-span-3">
            <div class="text-3xl text-farm-green-500 font-black">↓</div>
          </div>

          <div class="col-span-3 text-center mt-2">
            <div class="inline-block bg-gradient-to-br from-purple-600 to-red-600 rounded-xl p-3 mb-3">
              <MoonIcon class="w-9 h-9 text-slate-100" />
            </div>
            <h4 class="font-black text-white">Modo Noche</h4>
            <p class="text-xs text-gray-400 mt-1">Actívalo cuando estés listo; enfrenta oleadas de zombies</p>
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
import {
  SunIcon,
  MoonIcon,
  BeakerIcon,
  FireIcon,
} from "@heroicons/vue/24/outline";
</script>

<style scoped>
.gamer-glow {
  text-shadow: 0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.4);
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    text-shadow: 0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.4);
  }
  50% {
    text-shadow: 0 0 30px rgba(239, 68, 68, 1), 0 0 60px rgba(239, 68, 68, 0.6);
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
