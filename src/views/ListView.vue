<template>
  <Loader v-if="pokemonStore.isLoading" />

  <div v-else class="search-container">
    <InputSearch placeholder="Search" icon="search" v-model="searchQuery" />

    <div class="input-container">
      <InputList
        v-for="(name, index) in filteredPokemonList"
        :key="index"
        :name="name"
        @click="selectPokemon(name)"
      />
    </div>

    <EmptyList v-if="!filteredPokemonList.length && !pokemonStore.isLoading" />

    <NavBar v-if="filteredPokemonList.length" />
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
const isModalOpen = ref(false);

const filteredPokemonList = computed(() =>
  pokemonStore.pokemonList.filter((name) =>
    name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const selectPokemon = async (name) => {
  await pokemonStore.fetchPokemonDetails(name);
  isModalOpen.value = true;
};

onMounted(() => {
  pokemonStore.fetchPokemon();
});
</script>

<style lang="scss">
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    gap: 2rem;
  }

  .input-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media screen and (min-width: 768px) {
      gap: 0.5rem;
    }
  }
}
</style>
