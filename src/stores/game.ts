<!-- filepath: /Users/blxckbxll/Desktop/farm/farm_game/src/views/LandingPage.vue -->
<template>
  <div class="landing-page">
    <header>
      <h1>Bienvenido a Farm Adventure</h1>
      <p>¡Cultiva, explora y construye tu propia granja!</p>
      <router-link to="/about" class="cta-button">Descubre más</router-link>
    </header>
    <section class="features">
      <h2>Características del juego</h2>
      <div class="feature">
        <h3>Cultiva tus propios cultivos</h3>
        <p>Planta y cosecha una variedad de cultivos en tu granja.</p>
      </div>
      <div class="feature">
        <h3>Explora el mundo</h3>
        <p>Descubre nuevos lugares y conoce a los habitantes del pueblo.</p>
      </div>
      <div class="feature">
        <h3>Construye y personaliza</h3>
        <p>Construye tu granja a tu manera y personaliza tu hogar.</p>
      </div>
    </section>
    <footer>
      <p>&copy; 2023 Farm Adventure. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Aquí puedes agregar lógica adicional si es necesario
</script>

<style scoped>
.landing-page {
  text-align: center;
  padding: 2rem;
  background-color: var(--color-background);
  color: var(--color-text);
}

header {
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: hsla(160, 100%, 37%, 0.8);
}

.features {
  margin: 2rem 0;
}

.feature {
  margin: 1rem 0;
}

footer {
  margin-top: 2rem;
  font-size: 0.8rem;
}
</style>