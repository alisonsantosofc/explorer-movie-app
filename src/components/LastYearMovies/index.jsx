import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import MovieCard from '../MovieCard';

import './styles.scss';

const APIKey = '&api_key=0566763322f997e45d892d670c45d60c';
const url = '/discover/movie?with_genres=18&primary_release_year=2021';

const LastYearMovies = () => {
  const [movieData, setMovieData] = useState([]);
  const [urlSet, setUrl] = useState(url);

  useEffect(() => {
    api.get(`${url}${APIKey}`).then((data) => {
      setMovieData(data.data.results);
      // console.log(movieData);
    });
  }, [urlSet]);

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
