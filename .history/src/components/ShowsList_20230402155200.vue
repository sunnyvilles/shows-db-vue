
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
console.log(allShows.length)
onUpdated(() => console.log(2))




onMounted(async () => {
  const showsList = await fetchAllShows();
  console.log(showsList.length)
  const categorizedShows = createCategorizedShows(showsList);
  setAllShows(categorizedShows);
  console.log(categorizedShows.length)
})

const createCategorizedShows = (showsList) => {
  let shows = { Misc: [] };
  showsList.forEach((element) => {
    if (element.genres?.length > 0) {
      element.genres.forEach((genre) => {
        if (!shows[genre]) shows = { ...shows, [genre]: [] };
        shows[genre].push(element);
      });
    } else {
      shows.Misc.push(element);
    }
  });
  if (shows.Misc.length === 0) delete shows.Misc;
  return shows;
};


</script>