import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { getUserProfile, register } from './users.api';

export function useRegister() {
  return useMutation({
    mutationFn: register
  });
}

export function useGetUserProfile() {
  return useSuspenseQuery({
    queryKey: ['userProfile'],
    queryFn: getUserProfile
  });
}
