import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import MovieCard from '../MovieCard';

import './styles.scss';

const APIKey = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL_RELEASE_2021;

const LastYearMovies = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    api.get(`${url}${APIKey}`).then((data) => {
      setMovieData(data.data.results);
      // console.log(movieData);
    });
  }, []);

  return (
    <section className="last-movies">
      <h1>Dezembro/2021</h1>
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

export default LastYearMovies;
