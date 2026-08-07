import axios from 'axios';
import { auth } from '../firebase/auth';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(async config => {
  const user = auth.currentUser;
  console.log('Current User:', user);

  if (user) {
    const idToken = await user.getIdToken();
    config.headers.Authorization = `Bearer ${idToken}`;
  }

  return config;
});

export default axiosInstance;
