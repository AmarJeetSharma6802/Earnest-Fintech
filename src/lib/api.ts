import axios from 'axios';

const rawBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const normalizedBaseUrl = rawBaseUrl.endsWith('/api')
  ? rawBaseUrl
  : `${rawBaseUrl.replace(/\/+$/, '')}/api`;

const api = axios.create({
  baseURL: normalizedBaseUrl,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
