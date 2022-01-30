import React from 'react';
import Carousel from 'react-elastic-carousel';

import MovieCard from '../MovieCard';

import './styles.scss';

const CarouselMovies = ({ title, items, slug }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScrol: 2 },
    { width: 768, itemsToShow: 4, itemsToScrol: 3 },
    { width: 1368, itemsToShow: 6, itemsToScrol: 3 },
  ];

  const carouselClass =
    title === 'Em cartaz' ? 'primary-title' : 'secondary-title';

  console.log(carouselClass);

  return (
    <section className="carousel-movies">
      <h1 className={carouselClass}>{title}</h1>
      <div className="container">
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints} pagination={false}>
            {items.results.map((item, key) => (
              <MovieCard key={key} info={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselMovies;
