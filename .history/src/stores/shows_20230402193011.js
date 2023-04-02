import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useShowsStore = defineStore('shows', () => {

    let allShows = ref([]);
    const selectedShows = ref(null);

    function setAllShows(val) {
        allShows.value = createCategorizedShows(val);
        console.log('inset', allShows)
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

function createCategorizedShows(showsList) {
    let shows = { Misc: [] };
    showsList.forEach((element) => {
        if (element.genres?.length > 0) {
            element.genres.forEach((genre) => {
                if (!shows[genre]) shows = { ...shows, [genre]: [] };
                shows[genre].push(element);
            });
        } else {
            shows.Misc.push(element);
        }
    });
    if (shows.Misc.length === 0) delete shows.Misc;
    console.log('out', shows, 'in', showsList)
    return shows;
};