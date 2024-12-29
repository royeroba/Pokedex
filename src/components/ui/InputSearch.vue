<template>
  <div class="search-input">
    <span v-if="icon" class="search-icon">
      <img :src="`/img/${icon}.svg`" alt="Input-Icon" class="icon-img" />
    </span>
    <input
      type="text"
      :placeholder="placeholder"
      class="search-field"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null,
  },
});

defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: var(--white);
  border: 1px solid var(--light-white);
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  padding: 0 15px;

  @media screen and (min-width: 769px) {
    width: 70%;
    margin: 0 auto;
  }

  .search-icon {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-img {
      width: 18px;
      height: 18px;
    }
  }

  .search-field {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    font-family: "Montserrat";
    color: var(--black);

    &::placeholder {
      color: var(--light-gray);
    }
  }
}
</style>
