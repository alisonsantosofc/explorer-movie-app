import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import options from '../../config/date.config';

import './styles.scss';

Modal.setAppElement('#root');

const Movie = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const date = new Date();
  const releaseDate = date.toLocaleDateString('pt-br', options);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button type="button" className="movie" onClick={handleOpenModal}>
        <img src="" alt="Movie Cover" />

        <div className="title-overview">
          <h4>Movie Title</h4>
        </div>
      </button>
      <Modal
        className="movie-modal"
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Modal Movie"
        style={{ overlay: { backgroundColor: 'transparent' } }}
      >
        <img src="" alt="Movie Poster" />

        <div className="movie-info">
          <div className="movie-content">
            <h2>Movie Title</h2>

            <p>Detalhes do Filme</p>

            <dl>
              <dt className="yellow">Estréia:</dt>
              <dd>02 Janeiro 2022</dd>
              <dt>Gênero:</dt>
              <dd>Ação, Aventura, Comédia</dd>
              <dt>Duração:</dt>
              <dd>155 min</dd>
            </dl>

            <p className="movie-overview">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium officia facere dolorem ab mollitia dicta ipsa laborum
              libero tempore ratione non atque doloribus unde eligendi, error
              sed. Nulla, voluptates sapiente!
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Movie;
