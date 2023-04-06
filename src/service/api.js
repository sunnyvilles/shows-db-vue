import axiosClient from '../axiosClient';

async function fetchAllShows(pageNo = 1) {
    const response = await axiosClient.get(`/api/shows?page=${pageNo}`).catch((error) => {
        console.log(error);
    });
    return response.data;
}

async function fetchSearchResults(query) {
    if (query === '') return fetchAllShows();
    const response = await axiosClient.get(`/api/search/shows?q=${query}`).catch((error) => {
        console.log(error);
    });
    return response.data.map((result) => result.show);
}

async function fetchShow(id = 1) {
    const response = await axiosClient.get(`/api/shows/${id}`).catch((error) => {
        console.log(error);
    });
    return response.data || [];
}


export { fetchAllShows, fetchSearchResults, fetchShow }
