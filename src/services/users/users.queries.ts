import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { getUserProfile, register } from './users.api';
import { useAuthStore } from '../../store/authStore';

export function useRegister() {
  return useMutation({
    mutationFn: register
  });
}

export function useGetUserProfile() {
  const user = useAuthStore(state => state.user);

  return useSuspenseQuery({
    queryKey: ['userProfile', { uid: user?.uid }],
    queryFn: getUserProfile
  });
}
