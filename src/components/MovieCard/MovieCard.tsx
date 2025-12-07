import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import { Image, Banner } from './Index';

import type { MovieType } from './Type';

const MovieCard = ({ movie }: { movie: MovieType }): JSX.Element => {
  return (
    <Link to={`${movie.id}`}>
      <div
        className="group w-96 relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg focus-within:shadow-lg transition-shadow duration-200"
        tabIndex={0}
        aria-labelledby={`movie-title-${movie.id}`}
      >
        <div className="relative h-144 sm:h-144 md:h-144">
          <Image className='image' title={movie.title} url={movie.poster_path} />
          <Banner
            title={movie.title}
            year={movie.release_date}
            id={movie.id}
          />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
