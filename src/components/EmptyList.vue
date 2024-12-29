<template>
  <div class="empty-description">
    <h1>Uh-oh!</h1>
    <h2>You look lost on your journey!</h2>
    <RouterLink class="router-link" :to="{ name: 'home' }">
      <PokeButton text="Go back home"
    /></RouterLink>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import PokeButton from "/src/components/ui/PokeButton.vue";

const route = useRoute();
</script>

<style lang="scss" scoped>
.empty-description {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  h2 {
    font-size: 20px;
  }
}
</style>
