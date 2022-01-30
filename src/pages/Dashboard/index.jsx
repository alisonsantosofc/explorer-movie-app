import React, { useEffect, useState } from 'react';

import CarouselMovies from '../../components/CarouselMovies';

import './styles.scss';

const Dashboard = () => {
  return (
    <main>
      <CarouselMovies sectionTitle="Em Cartaz" titleClass="cyan" />
      <CarouselMovies sectionTitle="Janeiro/2022" titleClass="yellow" />
      <CarouselMovies sectionTitle="Dezembro/2021" titleClass="yellow" />
    </main>
  );
};

export default Dashboard;
