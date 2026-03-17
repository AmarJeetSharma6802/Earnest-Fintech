import axios from 'axios';

const DEFAULT_LOCAL_API_ORIGIN = 'http://localhost:5000';

const stripApiSuffix = (value: string) =>
  value
    .trim()
    .replace(/\/+$/, '')
    .replace(/\/api$/i, '');

const configuredApiOrigin = process.env.NEXT_PUBLIC_API_URL
  ? stripApiSuffix(process.env.NEXT_PUBLIC_API_URL)
  : DEFAULT_LOCAL_API_ORIGIN;

const normalizedBaseUrl =
  typeof window === 'undefined'
    ? `${configuredApiOrigin}/api`
    : '/api';

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
