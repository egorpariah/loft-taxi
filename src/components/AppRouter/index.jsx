import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { privateRoutes, publicRoutes } from '../../router/routes';

export default function AppRouter() {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? (
    <Routes>
      {privateRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
}
