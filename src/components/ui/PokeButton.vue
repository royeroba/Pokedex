<template>
  <button :disabled="disabled" :class="['btn', sizeClass]">
    <img
      v-if="icon"
      :src="`/src/assets/img/${icon}.svg`"
      alt="icon"
      class="btn-icon"
    />
    <p class="btn-text">{{ text }}</p>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
    validator: (value) => ["default", "sm", "md"].includes(value),
  },
});

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "btn-sm";
    case "md":
      return "btn-md";
    default:
      return "btn-default";
  }
});
</script>

<style lang="scss" scoped>
.btn {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--light-red);
  color: var(--light-white);
  border: none;
  border-radius: 60px;
  padding: 11px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--dark-red);
  }

  &:active {
    background-color: var(--light-red);
  }

  &:disabled {
    background-color: var(--light-gray);
    color: var(--light-white);
    cursor: not-allowed;
  }

  &.btn-default {
    width: auto;
  }

  &.btn-sm {
    width: 150px;
  }

  &.btn-md {
    width: 275px;
  }

  .btn-icon {
    width: 22px;
    height: 22px;
  }

  .btn-text {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    font-family: "Lato";
  }
}
</style>
