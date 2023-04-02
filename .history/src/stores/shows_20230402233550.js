import { defineStore } from 'pinia';
import { toRefs, ref } from 'vue';
import { createCategorizedShows } from '@/utils/helpers';

export const useShowsStore = defineStore('shows', () => {

    const allShows = ref([]);
    const selectedShows = ref(null);
    const searchTermShows = ref('');

    function setAllShows(val) {
        allShows.value = createCategorizedShows(val);
    }

    function setSelectedShows(val) {
        selectedShows.value = val;
    }

    function setSearchTermShows(val) {
        selectedShows.value = val;
    }

    return {
        allShows,
        selectedShows,
        setAllShows,
        setSelectedShows
    }
})