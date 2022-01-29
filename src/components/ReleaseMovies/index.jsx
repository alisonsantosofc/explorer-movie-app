import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import MovieCard from '../MovieCard';

import './styles.scss';

const APIKey = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL_RELEASE_2022;

const RealeseMovies = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    api.get(`${url}${APIKey}`).then((data) => {
      setMovieData(data.data.results);
      // console.log(movieData);
    });
  }, []);

  return (
    <section className="top-movies">
      <h1>Janeiro/2022</h1>
      <div className="container">
        {movieData.length === 0 ? (
          <p className="not-found">Not Found</p>
        ) : (
          movieData.map((movie) => {
            console.log(movie);
            return <MovieCard info={movie} key={movie.id} />;
          })
        )}
      </div>
    </section>
  );
};

export default RealeseMovies;
