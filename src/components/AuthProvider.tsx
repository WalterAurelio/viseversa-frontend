import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/auth';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore(state => state.setUser);
  const setLoading = useAuthStore(state => state.setLoading);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (!user) {
        setUser(null);
        setLoading(false);
        return;
      }

      const idToken = await user.getIdToken();
      console.log('ID Token:', idToken);

      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [setUser, setLoading]);

  return children;
}
export default AuthProvider;
