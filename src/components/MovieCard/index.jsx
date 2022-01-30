import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import optionsDate from '../../config/date.config';

import './styles.scss';

Modal.setAppElement('#root');

const Movie = ({ info }) => {
  const { title, id, overview, backdrop_path, poster_path, release_date } =
    info;

  const [modalIsOpen, setIsOpen] = useState(false);

  const date = new Date(release_date);
  const releaseDate = date.toLocaleDateString('pt-br', optionsDate);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

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

            <p>Detalhes do Filme</p>

            <dl>
              <dt className="yellow">Estréia:</dt>
              <dd>{releaseDate}</dd>
              <dt>Gênero:</dt>
              <dd>Ação, Aventura, Comédia</dd>
              <dt>Duração:</dt>
              <dd>155 min</dd>
            </dl>

            <p className="movie-overview">{overview}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Movie;
