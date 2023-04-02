
<template>
  <ShowsByGenre v-for="(shows, genre, index) in getShowsListByGenre" :shows="shows" :genre="genre" :key="index" />
</template>

<script setup>
import ShowsByGenre from "@/components/ShowsByGenre.vue";
import { useShowsStore } from "@/stores/shows.js";

const { allShows } = useShowsStore();

const getShowsListByGenre = () => allShows;

</script>