<template>
  <div class="show-details-container">
    <h2>{{ selectedShow?.name }}</h2>
    <div class="show-details-container_img">
      <img :src="selectedShow?.image?.original" alt="show poster" />
    </div>
    <div class="show-details-container_info">
      <h3>Details</h3>
      <p v-html="selectedShow?.summary"></p>
      <p></p>
      <table>
        <tr>
          <td>Type</td>
          <td>{{ selectedShow?.type }}</td>
        </tr>
        <tr>
          <td>Rating</td>
          <td>{{ selectedShow?.rating?.average }}</td>
        </tr>
        <tr>
          <td>Language</td>
          <td>{{ selectedShow?.language }}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>{{ selectedShow?.genres?.join(", ") }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useShowsStore } from '@/stores/shows.js';
import { fetchShow } from '@/service/api.js';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const { setSelectedShow } = useShowsStore();

const showStore = useShowsStore();
const { selectedShow } = storeToRefs(showStore);

const props = defineProps({
  id: String
});

onMounted(async () => {
  const show = await fetchShow(props.id);
  setSelectedShow(show);
});

</script>
<style lang="scss" scoped>
.show-details-container {
  display: flex;
  flex-flow: row wrap;
  text-align: center;

  &>* {
    padding: 10px;
    margin: 10px;
    flex: 1 100%;
    border-radius: 10px;
  }

  &_img {
    flex: 1;

    img {
      max-width: 350px;
    }
  }

  &_info {
    flex: 1;

    table {
      width: 100%;
      margin-top: 40px;

      tr {
        padding: 10px;
      }
    }
  }

  @media all and (max-width: var(--breakpoint)) {
    &_img {
      order: 1;
    }

    &_info {
      order: 2;
    }
  }
}
</style>
