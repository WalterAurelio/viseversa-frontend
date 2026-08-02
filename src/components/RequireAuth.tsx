import { Navigate, Outlet } from 'react-router';
import { useUserStore } from '../store/userStore';
import { useEffect } from 'react';

function RequireAuth() {
  const user = useUserStore(state => state.user);

  useEffect(() => {
    console.log('RequireAuth user:', user);
  }, [user]);

  return user ? <Outlet /> : <Navigate to='/login' />;
}
export default RequireAuth;
