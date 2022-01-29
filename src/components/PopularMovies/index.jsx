import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import api from '../../services/api';
import MovieCard from '../MovieCard';

import './styles.scss';

const APIKey = '&api_key=0566763322f997e45d892d670c45d60c';
const url = '/discover/movie?sort_by=popularity.desc';

const PopularMovies = () => {
  const [movieData, setMovieData] = useState([]);
  const [urlSet, setUrl] = useState(url);

  useEffect(() => {
    api.get(`${url}${APIKey}`).then((data) => {
      setMovieData(data.data.results);
      // console.log(movieData);
    });
  }, [urlSet]);

  const breakPoints = [
    { width: 1, itemToShow: 1 },
    { width: 550, itemToShow: 2, itemToScrol: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1368, itemToShow: 6 },
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
