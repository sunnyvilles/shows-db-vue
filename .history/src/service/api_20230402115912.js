import axiosClient from '../axiosClient';

async function fetchAllShows(pageNo = 1) {
    const response = await axiosClient.get('/shows?page=1')
    console.log(response.data)
    return response.data;
}

async function fetchSearchResults(pageNo = 1) {
    const response = await axiosClient.get(`?page=${pageNo}`)
    console.log(response.data)
    return response.data;
}
