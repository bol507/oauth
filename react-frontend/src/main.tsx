import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from '@/contexts/userContext';
import App from './App.tsx';
import './assets/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </StrictMode>
);
