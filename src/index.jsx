import React from 'react';
import rd3 from 'react-d3-library';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import "../src/style/index.css";
import Header from './containers/Header';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route path="/:id" element={<Home />} exact />
        </Routes>
    </Router>
  </React.StrictMode>
);

