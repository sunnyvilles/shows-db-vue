import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useShowsStore = defineStore('shows', () => {

    const allShows = ref(null);
    const selectedShows = ref(null);

    function setAllShows(val) {
        allShows.value = val;
        console.log(val);
    }

    function setSelectedShows(val) {
        selectedShows.value = val
    }

    return {
        allShows,
        selectedShows,
        setAllShows,
        setSelectedShows
    }
})