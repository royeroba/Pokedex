<template>
  <div class="hero-image">
    <img
      src="/src/assets/img/red-ball.svg"
      alt="Red-Circle"
      class="red-circle"
    />
    <img
      src="/src/assets/img/pikachu-hero.svg"
      alt="Pikachu"
      class="pikachu-hero"
    />
  </div>
</template>

<style lang="scss" scoped>
.hero-image {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 288px;

  .red-circle {
    position: absolute;
    width: 206px;
    height: 206px;
  }
  .pikachu-hero {
    position: absolute;
    top: 0;
    left: 0;
    width: 325px;
    height: 261.92px;
  }
}
</style>
