
<template>
  <ShowsByGenre v-for="(shows, genre, index) in getShowsListByGenre" :shows="shows" :genre="genre" :key="index" />
</template>

<script setup>
import ShowsByGenre from "@/components/ShowsByGenre.vue";
import { storeToRefs } from 'pinia';
import { useShowsStore } from "@/stores/shows.js";
import { onUpdated, onMounted } from "vue";
import { fetchAllShows } from '@/service/api.js';

const { setAllShows } = useShowsStore();

const showStore = useShowsStore();
const { allShows } = storeToRefs(showStore);

const getShowsListByGenre = () => {
  console.log('x')
  return allShows
};

onUpdated(() => console.log('list updated' + allShows.length))

onMounted(async () => {
  let showsList = await fetchAllShows();
  setAllShows(showsList);
  console.log(allShows.length)
})

</script>