import axiosInstance from '../api/axios';

export const register = async (body: unknown) => {
  const res = await axiosInstance.post('/auth', body);
  return res.data;
};
