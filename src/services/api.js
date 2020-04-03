import axios from 'axios';

const api = axios.create({
  baseURL: 'https://volvlem.herokuapp.com',
})

export default api;