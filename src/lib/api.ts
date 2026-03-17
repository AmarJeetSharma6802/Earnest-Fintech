import axios from 'axios';

const apiOrigin = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000')
  .trim()
  .replace(/\/+$/, '')
  .replace(/\/api$/i, '');

const api = axios.create({
  baseURL: typeof window === 'undefined' ? `${apiOrigin}/api` : '/api',
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token =
    typeof window === 'undefined' ? null : localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
