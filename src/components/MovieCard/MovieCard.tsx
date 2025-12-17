import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import { Image, Banner } from './Index';

import type { AllMovie } from './Type';

const MovieCard = ({
  movie,
  route,
}: {
  movie: AllMovie;
  route: string;
}): JSX.Element => {
  return (
    <Link to={`${route}${movie.id}`}>
      <div
        className="group w-85 relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg focus-within:shadow-lg transition-shadow duration-200"
        tabIndex={0}
        aria-labelledby={`movie-title-${movie.id}`}
      >
        <div className="relative h-144 sm:h-144 md:h-144">
          <Image
            className="image"
            title={movie.name ? movie.name : movie.title}
            url={movie.poster_path}
          />
          <Banner
            title={movie.title}
            name={movie.name}
            year={
              movie.first_air_date ? movie.first_air_date : movie.release_date
            }
            id={movie.id}
          />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
