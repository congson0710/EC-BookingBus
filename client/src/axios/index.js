import axios from 'axios';

const axiosInstance = axios.create({ baseURL: '' });

export function setToken(token) {
  return axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
export function removeToken() {
  return axiosInstance.defaults.headers.common['Authorization'] = '';
}
export default axiosInstance;
