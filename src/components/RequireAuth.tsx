import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '../store/authStore';

function RequireAuth() {
  const user = useAuthStore(state => state.user);
  const loading = useAuthStore(state => state.loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to='/login'
      replace
    />
  );
}
export default RequireAuth;
