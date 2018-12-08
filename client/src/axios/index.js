import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:5000' });

export function setToken(token) {
  return axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axiosInstance;
