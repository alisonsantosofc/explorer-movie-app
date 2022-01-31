import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { getMovieInfo } from '../../services/apiTmdb';
import optionsDate from '../../config/date.config';

import './styles.scss';

Modal.setAppElement('#root');

const Movie = ({ info }) => {
  const { id, poster_path } = info;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const loadMovieInfo = async () => {
      const data = await getMovieInfo(id);

      setMovieData(data);
    };

    loadMovieInfo();
  }, []);

  async function handleOpenModal() {
    console.log(movieData);
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const {
    title,
    tagline,
    genres,
    runtime,
    overview,
    backdrop_path,
    release_date,
  } = movieData;

  const movieGeners = [];

  for (let i in genres) {
    movieGeners.push(genres[i].name);
  }

  const date = new Date(release_date);
  const releaseDate = date.toLocaleDateString('pt-br', optionsDate);

  return (
    <>
      <button type="button" className="movie" onClick={handleOpenModal}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="Movie Poster"
        />

        <div className="title-overview">
          <h4>{title}</h4>
        </div>
      </button>
      <Modal
        className="movie-modal"
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Modal Movie"
        style={{ overlay: { backgroundColor: 'transparent' } }}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt="Movie Background"
        />

        <div className="movie-info">
          <div className="movie-content">
            <h2>{title}</h2>

            <p>{tagline}</p>

            <dl>
              <dt className="yellow">Estréia:</dt>
              <dd>{releaseDate}</dd>
              <dt>Gênero:</dt>
              <dd>{movieGeners.join(', ')}</dd>
              <dt>Duração:</dt>
              <dd>{runtime}min</dd>
            </dl>

            <p className="movie-overview">{overview}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Movie;
