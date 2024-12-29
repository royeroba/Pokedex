<template>
  <Loader v-if="isLoading" />
  <div v-else class="search-container">
    <InputSearch placeholder="Search" icon="search" v-model="searchQuery" />

    <div class="input-container">
      <InputList
        v-for="(name, index) in filteredFavorites"
        :key="index"
        :name="name"
        @click="selectPokemon(name)"
      />
    </div>

    <EmptyList v-if="!filteredFavorites.length && !isLoading" />

    <NavBar v-if="filteredFavorites.length" />
  </div>

  <Modal
    v-if="isModalOpen"
    :pokemon="pokemonStore.selectedPokemon"
    @close="isModalOpen = false"
  />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { usePokemonStore } from "/src/stores/pokemonStore";
import InputSearch from "/src/components/ui/InputSearch.vue";
import InputList from "/src/components/ui/InputList.vue";
import EmptyList from "/src/components/EmptyList.vue";
import NavBar from "/src/components/NavBar.vue";
import Loader from "/src/components/Loader.vue";
import Modal from "/src/components/Modal.vue";

const pokemonStore = usePokemonStore();
const searchQuery = ref("");
const isLoading = ref(true);
const isModalOpen = ref(false);

onMounted(async () => {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
});

const filteredFavorites = computed(() =>
  [...pokemonStore.favorites].filter((name) =>
    name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const selectPokemon = async (name) => {
  await pokemonStore.fetchPokemonDetails(name);
  isModalOpen.value = true;
};
</script>
