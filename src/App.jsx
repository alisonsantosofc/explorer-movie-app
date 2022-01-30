import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Footer from './components/Footer';

import './scss/global.scss';
import './scss/responsive.scss';

const App = () => {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <Footer />
    </>
  );
};

export default App;
