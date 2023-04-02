<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './layout/Header.vue'

</script>

<template>
  <div class="container">
    <Header />
    <main>
      <router-view />
    </main>
    <footer>
      <h3>@shows-databse</h3>
    </footer>
  </div>

  <RouterView />
</template>

<style scoped lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}

.container {
  text-align: center;
  background-color: var(--color);
}

.container>* {
  padding: var(--outerSpacing);
  margin: var(--outerSpacing);
  flex: 1 100%;
}

.container {
  footer {
    height: var(--barHeight);
  }

  .main {
    text-align: left;
  }
}
</style>
