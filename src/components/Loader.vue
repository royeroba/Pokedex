<template>
  <div class="loader-overlay">
    <img
      src="/src/assets/img/pokeball-loader.svg"
      alt="Loader"
      class="loader-image"
    />
  </div>
</template>

<style lang="scss" scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--dark-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-image {
  width: 100px;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
