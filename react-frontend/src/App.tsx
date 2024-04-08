import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
/*CSS*/
import './App.css';
/*Layouts */
import DashboardLayout from '@/layout/DashboardLayout';
import AuthLayout from '@/layout/AuthLayout';
/*Views */
import Dashboard from '@/views/dashboard/Dashboard';
import Login from '@/views/auth/Login';
import Profile from '@/views/dashboard/Profile';
import Settings from '@/views/dashboard/Settings';
import Welcome from '@/views/dashboard/Welcome';
import Oauth from '@/views/auth/Oauth';

import { fetchUser } from '@/api/userApi';

const App = () => {
  // Get the access_token from the URL query parameters or local storage
  const tokenFromURL = new URLSearchParams(window.location.search).get(
    'access_token'
  );
  const tokenFromStorage = localStorage.getItem('token');
  const token = tokenFromURL || tokenFromStorage;

  // Store the token in local storage if it is received from the URL
  useEffect(() => {
    if (tokenFromURL) {
      localStorage.setItem('token', tokenFromURL);
    }
  }, [tokenFromURL]);

  // Fetch the user data using the token with the help of useQuery
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['user', token],
    queryFn: () => fetchUser(token),
    retry: 1,
    refetchOnWindowFocus: false
  });

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Welcome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />}>
            <Route index element={<Oauth />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
