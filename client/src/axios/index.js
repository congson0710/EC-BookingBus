import axios from 'axios';

const axiosInstance = axios.create({ baseUrl: 'localhost:5000' });

export default axiosInstance;
