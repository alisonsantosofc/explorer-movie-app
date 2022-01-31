import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import MovieModal from '../MovieModal';

import './styles.scss';

Modal.setAppElement('#root');

const Movie = ({ info }) => {
  const { id, title, poster_path } = info;

  const [modalIsOpen, setIsOpen] = useState(false);

  async function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button type="button" className="movie" onClick={handleOpenModal}>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt="Movie Poster"
        />

        <div className="title-overview">
          <h4>{title}</h4>
        </div>
      </button>
      <MovieModal
        movieId={id}
        isModalOpen={modalIsOpen}
        onModalClose={handleCloseModal}
      />
    </>
  );
};

export default Movie;
