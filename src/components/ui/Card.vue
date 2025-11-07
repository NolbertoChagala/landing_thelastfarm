<!-- filepath: /Users/blxckbxll/Desktop/farm/farm_game/src/views/LandingPage.vue -->
<template>
  <div class="landing-page">
    <header class="hero">
      <h1>Bienvenido a Farm Adventure</h1>
      <p>¡Cultiva, explora y construye tu propia granja en un mundo lleno de aventuras!</p>
      <router-link to="/about" class="cta-button">Descubre más</router-link>
    </header>

    <section class="features">
      <h2>Características del juego</h2>
      <div class="feature">
        <h3>Cultiva tu granja</h3>
        <p>Planta y cosecha una variedad de cultivos, cría animales y personaliza tu granja.</p>
      </div>
      <div class="feature">
        <h3>Explora el mundo</h3>
        <p>Descubre nuevos lugares, conoce a los habitantes del pueblo y participa en eventos.</p>
      </div>
      <div class="feature">
        <h3>Construye relaciones</h3>
        <p>Haz amigos, forma relaciones y participa en la vida social del pueblo.</p>
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
}

.hero {
  background: url('@/assets/hero-background.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 4rem 2rem;
}

.cta-button {
  background-color: #41b883;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
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