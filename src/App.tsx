import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import RequireAuth from './components/RequireAuth';
import Profile from './pages/Profile';
import { Suspense } from 'react';

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
        <Route
          path='/profile'
          element={
            <Suspense fallback={<div>Loading profile...</div>}>
              <Profile />
            </Suspense>
          }
        >
          <Route
            index
            element={<h1>Soy Publicaciones</h1>}
          />
          <Route
            path='resenas'
            element={<h1>Soy Reseñas</h1>}
          />
          <Route
            path='solicitudes'
            element={<h1>Soy Solicitudes</h1>}
          />
          <Route
            path='historial-intercambios'
            element={<h1>Soy Historial de Intercambios</h1>}
          />
        </Route>
        <Route
          path='/profile/edit-profile'
          element={<h1>Soy Editar Perfil</h1>}
        />
      </Route>
    </Routes>
  );
}
export default App;
