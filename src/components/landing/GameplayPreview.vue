<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <GallerySection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import HeroSection from './HeroSection.vue'
import FeaturesSection from './FeaturesSection.vue'
import GallerySection from './GallerySection.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
/* Estilos generales para la página de aterrizaje */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}
</style>