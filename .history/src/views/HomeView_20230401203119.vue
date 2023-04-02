<template>
  <ShowsSearch></ShowsSearch>
</template>

<script setup>
import axiosClient from '../axiosClient';
import ShowsSearch from '../components/ShowsSearch.vue';
import { onMounted } from 'vue';


onMounted(async () => {
  const response = await axiosClient.get('/shows?page=1')
  console.log(response.data)
})
</script>