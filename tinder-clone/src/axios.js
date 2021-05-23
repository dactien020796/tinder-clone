import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-tienle0207.herokuapp.com'
});

export default instance;