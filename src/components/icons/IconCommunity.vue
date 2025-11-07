<!-- filepath: /Users/blxckbxll/Desktop/farm/farm_game/src/views/LandingPage.vue -->
<template>
  <div class="landing-page">
    <header class="landing-header">
      <h1>Bienvenido a Stardew Valley: Aventura en el Campo</h1>
      <p>¡Cultiva, explora y construye tu propia granja!</p>
      <router-link to="/about" class="cta-button">Descubre Más</router-link>
    </header>
    
    <section class="features">
      <h2>Características del Juego</h2>
      <div class="feature-item">
        <h3>Cultiva tu Granja</h3>
        <p>Planta y cosecha una variedad de cultivos para hacer crecer tu granja.</p>
      </div>
      <div class="feature-item">
        <h3>Explora el Mundo</h3>
        <p>Descubre nuevos lugares, encuentra tesoros y conoce a los habitantes del pueblo.</p>
      </div>
      <div class="feature-item">
        <h3>Construye Relaciones</h3>
        <p>Haz amigos y construye relaciones con los personajes del juego.</p>
      </div>
    </section>

    <footer class="landing-footer">
      <p>&copy; 2023 Stardew Valley. Todos los derechos reservados.</p>
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
  background-color: #f0f8ff;
}

.landing-header {
  background-color: #4caf50;
  color: white;
  padding: 2rem;
}

.cta-button {
  background-color: #ff9800;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
}

.features {
  margin: 2rem 0;
}

.feature-item {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.landing-footer {
  margin-top: 2rem;
  font-size: 0.8rem;
}
</style>