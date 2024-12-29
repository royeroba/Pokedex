<template>
  <main class="main-container">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style lang="scss">
:root {
  --yellow: #eca539;
  --dark-red: #c00e20;
  --light-red: #f22539;
  --black: #353535;
  --dark-gray: #5e5e5e;
  --light-gray: #bfbfbf;
  --surface: #e8e8e8;
  --dark-white: #f5f5f5;
  --light-white: #f9f9f9;
  --white: #ffffff;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  font-family: "Lato";
  background-color: var(--light-white);
}
h1 {
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  color: var(--black);
}
h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: var(--dark-gray);
}
h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--dark-gray);
}
p {
  margin: 0;
  font-size: 22px;
  font-weight: 500;
}
.main-container {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 1.5rem;

  @media screen and (min-width: 768px) {
    padding: 2.5rem;
  }
}
.router-link {
  text-decoration: none;
}
</style>
