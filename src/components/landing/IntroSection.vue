<template>
  <section id="intro" class="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden bg-black">
    <!-- Video/Imagen de fondo épico -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-slate-900/80 to-black/90 z-10"></div>
      <!-- Gradiente animado en lugar de video -->
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-800 to-black opacity-60 animate-pulse"></div>
    </div>

    <div class="container-custom px-6 sm:px-0 mx-auto relative z-20 text-center">
      <!-- Logo/Título con efecto glitch -->
      <div class="mb-16 animate-fade-in">
        <div class="inline-block mb-6">
          <img src="/The_Last_Farm.webp" alt="The Last Farm" class="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-2xl" />
        </div>
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
          THE LAST
          <span class="block text-farm-green-400 gamer-glow">FARM</span>
        </h1>
        <div class="h-1 w-32 bg-gradient-to-r from-farm-green-400 to-purple-500 mx-auto mb-8"></div>
      </div>

      <!-- Narrativa épica -->
      <div class="max-w-3xl mx-auto animate-fade-in-delayed">
        <p class="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed font-light">
          <span class="text-farm-green-400 font-semibold">El mundo cambió.</span> Hace tres años, el virus se propagó sin control. La civilización colapsó en semanas. Las ciudades se convirtieron en cementerios. Los gobiernos cayeron. La ley desapareció.
        </p>
        
        <p class="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed">
          Los muertos no descansaban. Se levantaban, hambrientos, sin fin. Las hordas crecían cada noche, fusionándose en oleadas de destrucción pura. Los sobrevivientes se volvieron cazadores entre sí, luchas que se tornaban tan brutales como los mismísimos no-muertos.
        </p>

        <p class="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed">
          Pero tú encontraste algo raro: una granja apartada en las afueras, a kilómetros de toda civilización. Parece que el tiempo se detuvo aquí. Los campos todavía germinan. La casa aún tiene vida.
        </p>
        
        <p class="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
          Es tu último refugio. Tu única oportunidad.
          <span class="text-farm-green-400 font-semibold">De día</span> cultivas zanahorias, tu única fuente de vida. 
          Cuando terminas de sembrar y cosechar,
          <span class="text-red-400 font-semibold">entras al Modo Noche: un apocalipsis preparado donde debes enfrentar hordas zombies.</span>
          <br /><span class="text-red-400 font-semibold mt-4 block">¿Cuántas noches de combate podrás aguantar?</span>
        </p>

        <!-- Estadísticas/Badges -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 mb-12">
          <div class="bg-slate-800/50 backdrop-blur-md border border-farm-green-500/30 rounded-lg p-4 hover:border-farm-green-400/70 transition">
            <div class="text-2xl font-black text-farm-green-400">∞</div>
            <p class="text-xs text-gray-400 mt-2">OLEADAS INFINITAS</p>
          </div>
          <div class="bg-slate-800/50 backdrop-blur-md border border-purple-500/30 rounded-lg p-4 hover:border-purple-400/70 transition">
            <div class="text-2xl font-black text-purple-400">24/7</div>
            <p class="text-xs text-gray-400 mt-2">CICLO DÍA-NOCHE</p>
          </div>
          <div class="bg-slate-800/50 backdrop-blur-md border border-farm-yellow-500/30 rounded-lg p-4 hover:border-farm-yellow-400/70 transition">
            <div class="text-2xl font-black text-farm-yellow-400">∞</div>
            <p class="text-xs text-gray-400 mt-2">CULTIVOS ÚNICOS</p>
          </div>
          <div class="bg-slate-800/50 backdrop-blur-md border border-red-500/30 rounded-lg p-4 hover:border-red-400/70 transition">
            <div class="text-2xl font-black text-red-400">×∞</div>
            <p class="text-xs text-gray-400 mt-2">ENEMIGOS BRUTALES</p>
          </div>
        </div>
      </div>

      <!-- CTA Button con efecto gamer -->
      <div class="animate-fade-in-delayed-2 space-y-6">
        <a
          href="#story"
          class="inline-block px-10 py-4 bg-gradient-to-r from-farm-green-500 to-farm-green-600 hover:from-farm-green-400 hover:to-farm-green-500 text-black font-black text-lg rounded-lg shadow-2xl shadow-farm-green-500/50 transition transform hover:scale-105 hover:shadow-farm-green-400/70"
        >
          ▶ DESCUBRE TU HISTORIA
        </a>
      </div>
    </div>

    <!-- Efecto de scan líneas -->
    <div class="absolute inset-0 pointer-events-none z-30 opacity-20">
      <div class="scan-lines"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Animaciones y efectos
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

.animate-fade-in {
  animation: fadeInUp 1s ease-out;
}

.animate-fade-in-delayed {
  animation: fadeInUp 1s ease-out 0.3s both;
}

.animate-fade-in-delayed-2 {
  animation: fadeInUp 1s ease-out 0.6s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
