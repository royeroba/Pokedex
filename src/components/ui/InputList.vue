<template>
  <div class="list-input" :class="{ active: isActive }">
    <input type="text" class="input-field" :value="name" readonly />
    <span class="favorite-icon" @click="toggleFavorite(name)">
      <img
        :src="
          pokemonStore.isFavorite(name)
            ? '/img/fav-active.svg'
            : '/img/fav-inactive.svg'
        "
        alt="Favorite-Icon"
      />
    </span>
  </div>
</template>

<script setup>
import { usePokemonStore } from "/src/stores/pokemonStore";

defineProps({
  name: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const pokemonStore = usePokemonStore();

const toggleFavorite = (name) => {
  pokemonStore.toggleFavorite(name);
};
</script>

<style lang="scss" scoped>
.list-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: var(--white);
  border-radius: 5px;
  padding: 0 15px;
  transition: background-color 0.3s;

  @media screen and (min-width: 769px) {
    width: 70%;
    margin: 0 auto;
  }

  &.active {
    background-color: var(--light-gray);
  }

  .input-field {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 22px;
    font-family: "Lato";
    font-weight: 500;
    color: var(--black);
    cursor: pointer;

    &::placeholder {
      color: var(--light-gray);
    }
  }

  .favorite-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    cursor: pointer;

    img {
      width: 44px;
      height: 44px;
    }
  }
}
</style>
