<template>
  <footer class="footer-nav">
    <RouterLink
      class="router-link"
      v-slot="{ isActive }"
      :to="{ name: 'list' }"
    >
      <PokeButton
        :class="isActive ? 'active' : 'inactive'"
        text="All"
        icon="category"
        :size="btnSize"
      />
    </RouterLink>
    <RouterLink
      class="router-link"
      v-slot="{ isActive }"
      :to="{ name: 'favorites' }"
    >
      <PokeButton
        :class="isActive ? 'active' : 'inactive'"
        text="Favorites"
        icon="favorite"
        :size="btnSize"
      />
    </RouterLink>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import PokeButton from "/src/components/ui/PokeButton.vue";

const btnSize = ref("md");

const updateBtnSize = () => {
  btnSize.value = window.innerWidth <= 768 ? "sm" : "md";
};

onMounted(() => {
  updateBtnSize();
  window.addEventListener("resize", updateBtnSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateBtnSize);
});
</script>

<style lang="scss">
.footer-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  background-color: var(--white);
  box-shadow: -8px -9px 10px rgba(0, 0, 0, 0.05);

  .active {
    background-color: var(--light-red);
  }
  .inactive {
    background-color: var(--light-gray);
  }
}
</style>
