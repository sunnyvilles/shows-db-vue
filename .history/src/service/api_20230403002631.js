import axiosClient from '../axiosClient';

const req = async (url) => {
    await axiosClient
        .get(url)
        .catch((error) => {
            console.log(error);
        });
};


function fetchAllShows(pageNo = 1) {
    const response = req(`/shows?page=${pageNo}`)
    return response.data;
}

async function fetchSearchResults(query) {
    if (query === '') return fetchAllShows();
    const response = await axiosClient.get(`/search/shows?q=${query}`)
    return response.data.map((result) => result.show);
}

async function fetchShow(id = 1) {
    const response = await axiosClient.get(`/${id}`)
    return response.data || [];
}


export { fetchAllShows, fetchSearchResults }
