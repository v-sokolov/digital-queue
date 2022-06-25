import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, SignUpPage } from './pages';

export const AuthorizationRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/sign-up'} element={<SignUpPage />} />

      <Route path={'/'} element={<Navigate to={'login'} replace={false} />} />
      <Route path={'*'} element={<Navigate to={'/not-found'} />} />
    </Routes>
  );
};
