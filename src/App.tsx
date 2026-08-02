import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route
        path='/signup'
        element={<SignUp />}
      />
      <Route
        path='/login'
        element={<LogIn />}
      />

      <Route element={<RequireAuth />}>
        <Route
          path='/'
          element={<Home />}
        />
      </Route>
    </Routes>
  );
}
export default App;
