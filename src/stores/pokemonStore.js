import { defineStore } from "pinia";
import { ref } from "vue";
import api from "/src/lib/axios.js";

export const usePokemonStore = defineStore("pokemonStore", () => {
  const pokemonList = ref([]);
  const favorites = ref(new Set());
  const isLoading = ref(false);
  const selectedPokemon = ref(null);

  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      favorites.value = new Set(storedFavorites);
    }
  };

  const saveFavorites = () => {
    localStorage.setItem("favorites", JSON.stringify([...favorites.value]));
  };

  const toggleFavorite = (pokemonName) => {
    if (favorites.value.has(pokemonName)) {
      favorites.value.delete(pokemonName);
    } else {
      favorites.value.add(pokemonName);
    }
    saveFavorites();
  };

  const isFavorite = (pokemonName) => {
    return favorites.value.has(pokemonName);
  };

  const fetchPokemon = async () => {
    isLoading.value = true;
    try {
      const response = await new Promise((resolve) =>
        setTimeout(async () => resolve(await api.get()), 2000)
      );
      pokemonList.value = response.data.results.map((pokemon) => pokemon.name);
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  const fetchPokemonDetails = async (name) => {
    isLoading.value = true;
    try {
      const response = await api.get(`/${name}`);
      selectedPokemon.value = response.data;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  loadFavorites();

  return {
    pokemonList,
    favorites,
    isLoading,
    selectedPokemon,
    toggleFavorite,
    isFavorite,
    fetchPokemon,
    fetchPokemonDetails,
  };
});
