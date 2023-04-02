import axiosClient from '../axiosClient';

async function fetchAllShows() => {
    const response = await axiosClient.get('/shows?page=1')
    console.log(response.data)
    return response.data;
}