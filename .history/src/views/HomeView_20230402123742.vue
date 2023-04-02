<template>
  <ShowsSearch></ShowsSearch>
</template>

<script setup>
import ShowsSearch from '@/components/ShowsSearch.vue';
import { fetchAllShows } from '@/service/api.js';
import { onMounted } from 'vue';


onMounted(async () => {
  const response = await fetchAllShows();
  console.log(response.data)
})
</script>