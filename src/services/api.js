import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const getHomeContent = () => api.get('/home');
export const getPrograms = () => api.get('/programs');
export const getProjects = () => api.get('/projects');
export const getNews = () => api.get('/news');
export const getStats = () => api.get('/stats');
export const submitContact = (data) => api.post('/contact', data);

export default api;
