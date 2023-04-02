import axiosClient from '../axiosClient';

async function fetchAllShows(pageNo = 1) {
    const response = await axiosClient.get(`/shows?page=${pageNo}`)
    return response.data;
}

async function fetchSearchResults(query) {
    if (query === '') fetchAllShows();
    console.log(query);
    const response = await axiosClient.get(`/search/shows?q=${query}`)
    return response.data.map((result) => result.show);
}

export { fetchAllShows, fetchSearchResults }
