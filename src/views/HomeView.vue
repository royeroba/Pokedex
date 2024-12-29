<template>
  <div class="container">
    <Hero />

    <div class="welcome-text">
      <h1>Welcome to Pokédex</h1>
      <h2>
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </h2>
      <RouterLink class="router-link" :to="{ name: 'list' }">
        <PokeButton text="Get started" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import Hero from "/src/components/Hero.vue";
import PokeButton from "/src/components/ui/PokeButton.vue";

const route = useRoute();
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;

  .welcome-text {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
  }
}
</style>
