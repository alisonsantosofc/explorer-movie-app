import React from 'react';
import Carousel from 'react-elastic-carousel';

import MovieCard from '../MovieCard';

import './styles.scss';

const CarouselMovies = (props) => {
  const { sectionTitle, titleClass } = props;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScrol: 2 },
    { width: 768, itemsToShow: 4, itemsToScrol: 3 },
    { width: 1368, itemsToShow: 6, itemsToScrol: 3 },
  ];

  return (
    <section className="carousel-movies">
      <h1 className={titleClass}>{sectionTitle}</h1>
      <div className="container">
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints} pagination={false}>
            <div>Movie</div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselMovies;
