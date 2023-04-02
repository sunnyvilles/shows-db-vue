
<template>
  <ShowsByGenre v-for="(shows, genre, index) in getShowsListByGenre" :shows="shows" :genre="genre" :key="index" />
</template>

<script>
import ShowsByGenre from "@/components/Shows/ShowsByGenre.vue";
import { allShows } from "@/store/show.js";

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
  mounted() {
    this.$store.dispatch("fetchAllShows");
  },
};
</script>