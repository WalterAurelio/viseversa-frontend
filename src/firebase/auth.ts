import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { app } from './app';

export const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');
