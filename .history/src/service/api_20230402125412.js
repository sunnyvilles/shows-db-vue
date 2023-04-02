import axiosClient from '../axiosClient';

async function fetchAllShows(pageNo = 1) {
    const response = await axiosClient.get(`/shows?page=${pageNo}`)
    console.log(response.data)
    return response.data;
}

async function fetchSearchResults(query) {
    const response = await axiosClient.get(`/search/shows?q=${query}`)
    console.log(response.data)
    return response.data;
}

export { fetchAllShows, fetchSearchResults }
