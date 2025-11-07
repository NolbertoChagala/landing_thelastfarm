<!-- filepath: /Users/blxckbxll/Desktop/farm/farm_game/src/views/LandingPage.vue -->
<template>
  <div class="landing-page">
    <header class="hero">
      <h1>Bienvenido a Stardew Valley: Aventura en el Campo</h1>
      <p>¡Cultiva, explora y construye tu propia granja!</p>
      <router-link to="/about" class="cta-button">Descubre Más</router-link>
    </header>

    <section class="features">
      <h2>Características del Juego</h2>
      <div class="feature">
        <h3>Cultiva tu Granja</h3>
        <p>Planta y cosecha una variedad de cultivos, cría animales y mejora tu granja.</p>
      </div>
      <div class="feature">
        <h3>Explora el Mundo</h3>
        <p>Descubre cuevas, minas y secretos ocultos en un mundo vibrante y lleno de vida.</p>
      </div>
      <div class="feature">
        <h3>Construye Relaciones</h3>
        <p>Haz amigos, participa en festivales y construye relaciones significativas con los habitantes del pueblo.</p>
      </div>
    </section>

    <footer>
      <p>&copy; 2023 Stardew Valley. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Aquí puedes agregar lógica adicional si es necesario
</script>

<style scoped>
.landing-page {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.hero {
  background: url('@/assets/hero-background.jpg') no-repeat center center/cover;
  padding: 50px;
  text-align: center;
  color: white;
}

.cta-button {
  background-color: #41b883;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}

.features {
  padding: 20px;
  text-align: center;
}

.feature {
  margin: 20px 0;
}

footer {
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
}
</style>