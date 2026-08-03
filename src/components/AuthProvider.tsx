import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/auth';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore(state => state.setUser);
  const setLoading = useAuthStore(state => state.setLoading);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [setUser, setLoading]);

  return children;
}
export default AuthProvider;
