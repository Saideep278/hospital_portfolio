import axios from 'axios';

const API = axios.create({ baseURL: 'https://hanusaidental.onrender.com' });


export const fetchPosts = () => API.get(`/reviews`);

export const createPost = (newPost) => API.post('/reviews', newPost);