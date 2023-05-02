import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { AppBar } from './AppBar/AppBar';

const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </>
  );
};
