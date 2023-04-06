<template>
  <div class="container">
    <HeaderLayout />
    <main>
      <router-view />
    </main>
    <footer>
      <h3>@shows-databse</h3>
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HeaderLayout from './layout/HeaderLayout.vue';

</script>

<style scoped lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}

.container {
  text-align: center;
  background-color: var(--color);
  padding: 0px;
  margin: 0px;
}

.container>* {
  padding: var(--outerSpacing);
  flex: 1 100%;
}

.container {
  footer {
    height: var(--barHeight);
  }

  main {
    text-align: left;
  }
}
</style>
