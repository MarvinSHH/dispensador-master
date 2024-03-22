// src/components/PublicRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Asegúrate de que la ruta es correcta

const PublicRoute = ({ element: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        !currentUser ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" /> // O redirige a otra página específica para usuarios autenticados
        )
      }
    />
  );
};

export default PublicRoute;
