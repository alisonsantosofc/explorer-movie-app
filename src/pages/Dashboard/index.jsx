import React, { useEffect, useState } from 'react';

import { getMovieList } from '../../services/apiTmdb';

import CarouselMovies from '../../components/CarouselMovies';

import './styles.scss';

const Dashboard = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const list = await getMovieList();

      setMovieList(list);
    };

    loadMovies();
  }, []);

  return (
    <main>
      {movieList.map((item, key) => (
        <CarouselMovies key={key} title={item.title} items={item.items} />
      ))}
    </main>
  );
};

export default Dashboard;
