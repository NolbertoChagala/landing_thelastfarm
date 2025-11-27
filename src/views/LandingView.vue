<template>
  <div class="landing-page">
    <NavBar />
    <IntroSection />
    <HeroSection />
    <GameMechanicsSection />
    <GameplaySection />
    <GallerySection />
    <DownloadSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavBar from "../components/ui/NavBar.vue";
import IntroSection from "../components/landing/IntroSection.vue";
import HeroSection from "../components/landing/HeroSection.vue";
import GameMechanicsSection from "../components/landing/GameMechanicsSection.vue";
import GameplaySection from "../components/landing/GameplaySection.vue";
import GallerySection from "../components/landing/GallerySection.vue";
import DownloadSection from "../components/landing/DownloadSection.vue";
import FooterSection from "../components/landing/FooterSection.vue";
</script>
