// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // Using proxy from Vite config
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (credentials) => api.post('/v1/login', credentials);
export const getCategories = () => api.get('/find/categories');
export const createCategory = (data) => api.post('/add/category', data);
export const updateCategory = (id, data) => api.put(`/update/category/${id}`, data);
export const deleteCategory = (id) => api.delete(`/delete/category/${id}`);
export const getServices = (categoryId) => api.get(`/find/category/${categoryId}/services`);
export const createService = (categoryId, data) => api.post(`/add/category/${categoryId}/service`, data);
export const updateService = (categoryId, serviceId, data) => api.put(`/update/category/${categoryId}/service/${serviceId}`, data);
export const deleteService = (categoryId, serviceId) => api.delete(`/delete/category/${categoryId}/service/${serviceId}`);

export default api;