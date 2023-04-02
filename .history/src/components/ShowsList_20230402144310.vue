
<template>
  <ShowsByGenre v-for="(shows, genre, index) in getShowsListByGenre" :shows="shows" :genre="genre" :key="index" />
</template>

<script>
import ShowsByGenre from "@/components/ShowsByGenre.vue";
import { useShowsStore } from "@/stores/shows.js";

const { allShows } = useShowsStore();

export default {
  name: "ShowsList",
  components: {
    ShowsByGenre,
  },
  computed: {
    getShowsListByGenre() {
      return allShows;
    },
  },
  // mounted() {
  //   this.$store.dispatch("fetchAllShows");
  // },
};
</script>