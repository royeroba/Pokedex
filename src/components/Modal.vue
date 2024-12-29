<template>
  <div class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
      <img class="modal-cover" src="/img/modal-cover.svg" alt="modal-cover" />

      <img
        v-if="pokemon?.sprites?.front_default"
        class="pokemon-image"
        :src="pokemon.sprites.front_default"
        alt="pokemon-image"
      />

      <img
        class="modal-close"
        src="/img/close.svg"
        alt="close"
        @click="closeModal"
      />

      <div class="modal-content" v-if="pokemon">
        <h3>
          Name: <span>{{ pokemon.name }}</span>
        </h3>
        <div class="separator"></div>
        <h3>
          Weight: <span>{{ pokemon.weight }}</span>
        </h3>
        <div class="separator"></div>
        <h3>
          Height: <span>{{ pokemon.height }}</span>
        </h3>
        <div class="separator"></div>
        <h3>
          Types:
          <span>{{
            pokemon.types.map((type) => type.type.name).join(", ")
          }}</span>
        </h3>
      </div>

      <div class="modal-actions" v-if="pokemon">
        <PokeButton text="Share to my friends" @click="shareToFriends" />
        <img
          class="modal-favorite"
          :src="isFavorite ? '/img/fav-active.svg' : '/img/fav-inactive.svg'"
          alt="Favorite-Icon"
          @click="toggleFavorite"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { usePokemonStore } from "/src/stores/pokemonStore";
import PokeButton from "/src/components/ui/PokeButton.vue";

const props = defineProps({
  pokemon: {
    type: Object,
    required: false,
  },
});

const emit = defineEmits(["close"]);

const pokemonStore = usePokemonStore();

const toggleFavorite = () => {
  if (props.pokemon) {
    pokemonStore.toggleFavorite(props.pokemon.name);
  }
};

const isFavorite = computed(() => {
  return props.pokemon ? pokemonStore.isFavorite(props.pokemon.name) : false;
});

function closeModal() {
  emit("close");
}

const shareToFriends = () => {
  if (!props.pokemon) {
    alert("No Pokémon data available to share.");
    return;
  }

  const pokemonDetails = `
    Name: ${props.pokemon.name},
    Weight: ${props.pokemon.weight},
    Height: ${props.pokemon.height},
    Types: ${props.pokemon.types.map((type) => type.type.name).join(", ")}
  `.trim();

  try {
    navigator.clipboard.writeText(pokemonDetails);
    alert("Copied to clipboard!");
  } catch (error) {
    console.error(error);
    alert("Failed to copy Pokémon details to clipboard. Please try again.");
  }
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--dark-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  width: 315px;
  height: 506px;
  background: var(--white);
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 570px;
    height: 506px;
  }
}

.modal-cover {
  width: 100%;
  height: 220px;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.pokemon-image {
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: auto;
  z-index: 2;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 10px;
  width: 26px;
  height: 26px;
  z-index: 3;
  cursor: pointer;
}

.modal-content {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 0.75rem;

  .separator {
    width: 100%;
    height: 1px;
    margin: 0;
    background-color: var(--surface);
  }

  span {
    font-weight: 500;
    font-size: 18px;
    color: var(--dark-gray);
  }
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
}

.modal-favorite {
  width: 44px;
  height: 44px;
  cursor: pointer;
}
</style>
