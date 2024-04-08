import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

import DashboardLayout from '@/layout/DashboardLayout';
import AuthLayout from '@/layout/AuthLayout';

import Dashboard from '@/views/dashboard/Dashboard';
import Login from '@/views/auth/Login';
import Profile from '@/views/dashboard/Profile';
import Settings from '@/views/dashboard/Settings';
import Welcome from '@/views/dashboard/Welcome';

const App = () => {
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
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
