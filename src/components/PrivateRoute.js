// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      element={({ location }) =>
        currentUser ? <Component /> : <Navigate to="/login" replace state={{ from: location }} />
      }
    />
  );
};

export default PrivateRoute;
