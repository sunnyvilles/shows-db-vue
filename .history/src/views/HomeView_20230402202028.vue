<template>
  <ShowsSearch></ShowsSearch>
  <ShowsList />
</template>

<script setup>
import ShowsSearch from '@/components/ShowsSearch.vue';
import ShowsList from '@/components/ShowsList.vue';
import { storeToRefs } from 'pinia';
import { useShowsStore } from '@/stores/shows.js';
import { fetchAllShows } from '@/service/api.js';

const showStore = useShowsStore();
const { allShows } = storeToRefs(showStore);

const searchTerm = ref('');


</script>