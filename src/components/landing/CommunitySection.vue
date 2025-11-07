<!-- filepath: /Users/blxckbxll/Desktop/farm/farm_game/src/views/LandingPage.vue -->
<template>
  <div class="landing-page">
    <header class="header">
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
        <p>Descubre nuevos lugares, encuentra tesoros y conoce a los habitantes del pueblo.</p>
      </div>
      <div class="feature">
        <h3>Construye Relaciones</h3>
        <p>Haz amigos, participa en festivales y construye relaciones significativas.</p>
      </div>
    </section>

    <footer class="footer">
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
  background-color: var(--color-background);
  color: var(--color-text);
}

.header {
  margin-bottom: 3rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #41b883;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #36a76a;
}

.features {
  margin: 2rem 0;
}

.feature {
  margin: 1.5rem 0;
}

.footer {
  margin-top: 3rem;
  font-size: 0.9rem;
}
</style>