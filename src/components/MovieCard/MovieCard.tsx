import type { JSX } from 'react';
import type { MovieType } from './Type';
import Image from './Image';
import Header from './Header';
import Banner from './Banner';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }: { movie: MovieType }): JSX.Element => {
  return (
    <Link to={`${movie.id}`}>
      <div
        className="group w-96 relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg focus-within:shadow-lg transition-shadow duration-200"
        tabIndex={0}
        aria-labelledby={`movie-title-${movie.id}`}
      >
        <div className="relative h-64 sm:h-72 md:h-80 bg-gray-100">
          <Image title={movie.title} url={movie.imageUrl} />
          <Banner
            genre={movie.genre}
            title={movie.title}
            year={movie.year}
            id={movie.id}
          />
        </div>
        <Header genre={movie.genre} title={movie.title} />
      </div>
    </Link>
  );
};

export default MovieCard;
