<template>
  <div class="landing-page">
    <header class="hero">
      <h1>Bienvenido a Farm Adventure</h1>
      <p>¡Cultiva, explora y construye tu propia granja en un mundo lleno de aventuras!</p>
      <router-link to="/about" class="cta-button">Descubre Más</router-link>
    </header>

    <section class="features">
      <h2>Características del Juego</h2>
      <div class="feature">
        <h3>Construcción de Granjas</h3>
        <p>Construye y personaliza tu granja con una variedad de cultivos y edificios.</p>
      </div>
      <div class="feature">
        <h3>Exploración</h3>
        <p>Explora un mundo vibrante lleno de secretos, recursos y criaturas.</p>
      </div>
      <div class="feature">
        <h3>Interacción Social</h3>
        <p>Conoce a los habitantes del pueblo y forja amistades duraderas.</p>
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
  font-family: 'Arial', sans-serif;
  color: #333;
}

.hero {
  background: url('@/assets/hero-background.jpg') no-repeat center center/cover;
  text-align: center;
  padding: 100px 20px;
  color: white;
}

.cta-button {
  background-color: #41b883;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #34495e;
}

.features {
  padding: 50px 20px;
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