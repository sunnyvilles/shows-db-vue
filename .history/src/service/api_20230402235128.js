import axiosClient from '../axiosClient';

async function fetchAllShows(pageNo = 1) {
    const response = await axiosClient.get(`/shows?page=${pageNo}`)
    console.log('all');
    return response.data;
}

async function fetchSearchResults(query) {
    if (query.trim() === '') fetchAllShows();
    console.log('q', query);
    const response = await axiosClient.get(`/search/shows?q=${query}`)
    return response.data.map((result) => result.show);
}

export { fetchAllShows, fetchSearchResults }
