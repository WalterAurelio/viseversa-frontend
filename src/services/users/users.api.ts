import axiosInstance from '../../api/axios';
import type { ApiResponse } from '../../types/ApiResponse';
import type { UserProfileResponse } from './users.types';

export const register = async (body: unknown) => {
  const res = await axiosInstance.post('/auth', body);
  return res.data;
};

export const getUserProfile = async () => {
  const res = await axiosInstance.get<ApiResponse<UserProfileResponse>>('/users');
  return res.data.data;
};
