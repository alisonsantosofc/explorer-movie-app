import React, { useEffect, useState } from 'react';

import CarouselMovies from '../../components/CarouselMovies';

import './styles.scss';

const Dashboard = () => {
  return (
    <main>
      <CarouselMovies
        apiKey={process.env.REACT_APP_API_KEY}
        url={process.env.REACT_APP_URL_POPULAR}
        sectionTitle="Em Cartaz"
        titleClass="cyan"
        autoPlay="true"
        autoPlaySpeed={5000}
      />
      <CarouselMovies
        apiKey={process.env.REACT_APP_API_KEY}
        url={process.env.REACT_APP_URL_RELEASE_2022}
        sectionTitle="Janeiro/2022"
        titleClass="yellow"
      />
      <CarouselMovies
        apiKey={process.env.REACT_APP_API_KEY}
        url={process.env.REACT_APP_URL_RELEASE_2021}
        sectionTitle="Dezembro/2021"
        titleClass="yellow"
      />
    </main>
  );
};

export default Dashboard;
