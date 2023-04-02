<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="search_container">
    <h3>Collection of all Tv shows</h3>
    <form @submit.prevent="onSearch">
      <div class="search">
        <input type="text" class="search_searchTerm" :value="modelValue" @input="onInput"
          @keydown.enter.prevent="onSearch" placeholder="Search your favourite show" />
        <button @click.prevent="onSearch" type="submit" class="search_searchButton">
          <img src="@/assets/search.svg" alt="search" />
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
