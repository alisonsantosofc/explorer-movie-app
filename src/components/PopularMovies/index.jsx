import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import api from '../../services/api';
import MovieCard from '../MovieCard';

import './styles.scss';

const APIKey = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL_POPULAR;

const PopularMovies = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    api.get(`${url}${APIKey}`).then((data) => {
      setMovieData(data.data.results);
    });
  }, []);

  const breakPoints = [
    { width: 1, itemToShow: 1 },
    { width: 550, itemToShow: 2, itemToScrol: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1368, itemToShow: 4 },
  ];

  return (
    <section className="popular-movies">
      <h1>Em cartaz</h1>
      <div className="container">
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
            {movieData.length === 0 ? (
              <p className="not-found">Not Found</p>
            ) : (
              movieData.map((movie) => {
                return <MovieCard info={movie} key={movie.id} />;
              })
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PopularMovies;
