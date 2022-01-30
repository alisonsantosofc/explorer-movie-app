import React, { useEffect, useState } from 'react';

import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

import apiTmdb from './services/apiTmdb';

import './scss/global.scss';
import './scss/responsive.scss';

const App = () => {
  return (
    <>
      <Dashboard />
      <Footer />
    </>
  );
};

export default App;
