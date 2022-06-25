import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthorizationRouter } from './modules/authorization/Authorization.router';
import { ErrorPage } from './pages/Error.page';

export const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/auth/*'} element={<AuthorizationRouter />} />

        <Route path={'/'} element={<Navigate to={'/auth'} />} />
        <Route path={'*'} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
