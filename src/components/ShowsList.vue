
<template>
  <ShowsByGenre v-for="(shows, genre, index) in allShows" :shows="shows" :genre="genre" :key="index" />
</template>

<script setup>

import ShowsByGenre from '@/components/ShowsByGenre.vue';
import { storeToRefs } from 'pinia';
import { useShowsStore } from "@/stores/shows.js";
import { onMounted } from 'vue';
import { fetchAllShows } from '@/service/api.js';

const { setAllShows } = useShowsStore();

const showStore = useShowsStore();
const { allShows } = storeToRefs(showStore);

onMounted(async () => {
  let showsList = await fetchAllShows();
  setAllShows(showsList);
})

</script>