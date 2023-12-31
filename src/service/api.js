import axios from 'axios';

const API_URI = 'https://backend-4ss4.onrender.com'; // backend url 

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data); // post is a api  data is a api body upload is a end point
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}
