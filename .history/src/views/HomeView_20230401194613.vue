<template>
  <main>
  </main>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import axiosClient from '../axiosClient';
import { onMounted } from 'vue';


onMounted(async () => {
  const response = await axiosClient.get('/shows?page=1')
  console.log(response.data)
})
</script>