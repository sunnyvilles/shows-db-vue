export const createCategorizedShows = (showsList) => {
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
    return shows;
};