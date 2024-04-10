import { Routes, Route, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
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
import Logout from '@/views/auth/Logout';
import { useUser } from '@/contexts/userContext';

const App = () => {
  const navigate = useNavigate();
  const { isLogged } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  // Get the access_token from the URL query parameters or local storage
  const tokenFromURL = new URLSearchParams(window.location.search).get(
    'access_token'
  );
  //check change in tokenFromUrl
  useEffect(() => {
    if (tokenFromURL) {
      localStorage.setItem('token', tokenFromURL);
      window.history.replaceState({}, document.title, '/');
      window.location.reload();
    }
  }, [tokenFromURL]);
  //check isLogged
  useEffect(() => {
    if (isLogged !== undefined) {
      setIsLoading(false);
    }
  }, [isLogged]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let routes;
  if (isLogged) {
    routes = null;
    routes = (
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    );
  } else {
    routes = null;
    routes = (
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Oauth />} />
      </Route>
    );
  }

  return (
    <div>
      <Routes>{routes}</Routes>
    </div>
  ); //return
};

export default App;
