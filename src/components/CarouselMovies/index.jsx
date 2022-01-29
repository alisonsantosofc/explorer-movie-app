import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import api from '../../services/api';
import MovieCard from '../MovieCard';

import './styles.scss';

const CarouselMovies = (props) => {
  const { apiKey, url, sectionTitle, titleClass, autoPlay, autoPlaySpeed } =
    props;

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    api.get(`${url}${apiKey}`).then((data) => {
      setMovieData(data.data.results);
    });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScrol: 2 },
    { width: 768, itemsToShow: 3, itemsToScrol: 3 },
    { width: 1368, itemsToShow: 6, itemsToScrol: 3 },
  ];

  return (
    <section className="carousel-movies">
      <h1 className={titleClass}>{sectionTitle}</h1>
      <div className="container">
        <div className="carousel-wrapper">
          <Carousel
            breakPoints={breakPoints}
            pagination={false}
            enableAutoPlay={autoPlay}
            autoPlaySpeed={autoPlaySpeed}
          >
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

export default CarouselMovies;
