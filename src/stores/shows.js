import { defineStore } from 'pinia';
import { ref } from 'vue';
import { createCategorizedShows } from '@/utils/helpers';

export const useShowsStore = defineStore('shows', () => {

    const allShows = ref([]);
    const selectedShow = ref(null);
    const searchTermShows = ref('');

    function setAllShows(val) {
        allShows.value = createCategorizedShows(val);
    }

    function setSelectedShow(val) {
        selectedShow.value = val;
    }

    function setSearchTermShows(val) {
        searchTermShows.value = val;
    }

    return {
        allShows,
        selectedShow,
        searchTermShows,
        setAllShows,
        setSelectedShow,
        setSearchTermShows
    }
})