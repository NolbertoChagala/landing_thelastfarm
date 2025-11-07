<template>
  <div class="landing-page">
    <header class="header">
      <h1>Bienvenido a Farm Adventure</h1>
      <p>¡Cultiva, explora y construye tu propia granja!</p>
      <router-link to="/about" class="cta-button">Descubre más</router-link>
    </header>

    <section class="features">
      <h2>Características del Juego</h2>
      <div class="feature">
        <h3>Cultiva tu Granja</h3>
        <p>Planta y cosecha una variedad de cultivos mientras cuidas de tus animales.</p>
      </div>
      <div class="feature">
        <h3>Explora el Mundo</h3>
        <p>Descubre nuevos lugares, encuentra tesoros y conoce a los habitantes del pueblo.</p>
      </div>
      <div class="feature">
        <h3>Construye y Personaliza</h3>
        <p>Construye tu hogar y personaliza tu granja a tu gusto.</p>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2023 Farm Adventure. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Aquí puedes agregar lógica si es necesario
</script>

<style scoped>
.landing-page {
  text-align: center;
  background-color: #f0f8ff;
  color: #333;
  padding: 2rem;
}

.header {
  background: url('@/assets/landing-background.jpg') no-repeat center center;
  background-size: cover;
  padding: 4rem 0;
  color: white;
}

.cta-button {
  background-color: #41b883;
  color: white;
  padding: 1rem 2rem;
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
  margin: 1rem 0;
}

.footer {
  margin-top: 2rem;
  font-size: 0.8rem;
}
</style>