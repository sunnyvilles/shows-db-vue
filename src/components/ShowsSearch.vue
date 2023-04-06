<template>
  <div class="search_container">
    <h3>Collection of all Tv shows</h3>
    <form @submit.prevent>
      <div class="search">
        <input type="text" class="search_searchTerm" v-model="searchTerm" placeholder="Search your favourite show" />
        <button @click.prevent="" type="submit" class="search_searchButton">
          <img src="@/assets/search.svg" alt="search" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>

import { fetchSearchResults } from '@/service/api.js';
import { watch, ref } from 'vue';
import { useShowsStore } from '@/stores/shows';

const searchTerm = ref('');
let debounce = null;

const { setAllShows } = useShowsStore();

defineProps({
  msg: {
    type: String
  }
})

const handleSearch = () => {
  clearTimeout(debounce);
  debounce = setTimeout(async () => {
    let showsList = await fetchSearchResults(searchTerm.value);
    setAllShows(showsList);
  }, 700)
}

watch(searchTerm, handleSearch)

</script>

<style scoped lang="scss">
.search_container {
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 50%;

    .search {
      display: flex;
      height: 36spx;
      margin: 0 auto;
      width: 100%;

      &_searchTerm {
        width: 100%;
        color: white;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        background: transparent;
        border: 2px solid #d1d5db;
        border-right: none;
        border-radius: 6px 0 0 6px;
        padding: 6px 10px;
        height: 20px;
        outline: none;

        &::placeholder {
          color: white;
        }
      }

      &_searchButton {
        height: 36px;
        background: transparent;
        color: var(--white);
        border: 2px solid #d1d5db;
        border-radius: 0 6px 6px 0;
        border-left: none;
        cursor: pointer;
        font-size: 20px;
        padding: 6px 10px 6px 0;

        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  @media all and (max-width: var(--breakpoint)) {
    form {
      width: 90%;
    }
  }
}
</style>
