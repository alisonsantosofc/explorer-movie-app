import React, { useEffect, useState } from 'react';

import PopularMovies from '../../components/PopularMovies';
import ReleaseMovies from '../../components/ReleaseMovies';
import LastYearMovies from '../../components/LastYearMovies';

import './styles.scss';

const Dashboard = () => {
  return (
    <main>
      <PopularMovies />
      <ReleaseMovies />
      <LastYearMovies />
    </main>
  );
};

export default Dashboard;
