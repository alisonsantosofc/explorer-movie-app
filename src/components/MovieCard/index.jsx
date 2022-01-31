import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaVideoSlash, FaChevronDown } from 'react-icons/fa';

import { getMovieInfo, getMovieVideo } from '../../services/apiTmdb';

import './styles.scss';

Modal.setAppElement('#root');

const Movie = ({ info }) => {
  const { id, poster_path } = info;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [movieData, setMovieData] = useState({});
  const [movieVideo, setMovieVideo] = useState({});

  useEffect(() => {
    const loadMovieInfo = async () => {
      const data = await getMovieInfo(id);

      setMovieData(data);
    };

    const loadMovieVideo = async () => {
      const video = await getMovieVideo(id);

      setMovieVideo(video);
    };

    loadMovieInfo();
    loadMovieVideo();
  }, []);

  async function handleOpenModal() {
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

  const listVideo = [];
  const { results } = movieVideo;

  for (let i in results) {
    listVideo.push(results[i].key);
  }

  const movieGeners = [];

  for (let i in genres) {
    movieGeners.push(genres[i].name);
  }

  const optionsDate = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

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

        <div className="modal-container">
          <div className="movie-info">
            <div className="movie-content">
              <div className="title-container">
                <h2>{title}</h2>
                <button type="button" onClick={handleCloseModal}>
                  <FaChevronDown />
                </button>
              </div>

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
          {listVideo[0] ? (
            <iframe
              className="movie-video"
              src={`https://www.youtube.com/embed/${listVideo[0]}`}
              frameBorder={0}
              allowFullscreen="true"
            ></iframe>
          ) : (
            <div className="movie-video">
              <FaVideoSlash className="video-notfound" />
              <h3>Não encontramos nenhum video :(</h3>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Movie;
