import React from 'react';

import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

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
