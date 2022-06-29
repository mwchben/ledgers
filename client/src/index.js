import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //connect app to the browser's URL

import './index.css';
import App from './App';
import LogCandidate from './pages/LogCandidate';
import LogVoter from './pages/LogVoter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="logVoter" element={<LogVoter />} />
        <Route path="logCandidate" element={<LogCandidate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

