
<template>
  <ShowsByGenre v-for="(shows, genre, index) in getShowsListByGenre" :shows="shows" :genre="genre" :key="index" />
</template>

<script setup>
import ShowsByGenre from "@/components/ShowsByGenre.vue";
import { storeToRefs } from 'pinia';
import { useShowsStore } from "@/stores/shows.js";
import { onUpdated } from "vue";

const showStore = useShowsStore();
const { allShows } = storeToRefs(showStore);

const getShowsListByGenre = () => allShows;

onUpdated(() => console.log(2))

</script>