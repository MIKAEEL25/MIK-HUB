import { Image, Detail,  } from '.';
import type { MovieType, SerieType } from './Type';

export const MovieDetails: React.FC<{ movie: MovieType }> = ({
  movie,
}) => {
  const imageDetailStyle = 'w-sm rounded-2xl absolute right-10 pulse-shadow';
  return (
    <div className="absolute m-auto top-40 left-0 h-4/5 text-center right-0">
      <Image
        className={imageDetailStyle}
        title={movie.title}
        url={movie.poster_path}
      />
      <Detail
        title={movie.title}
        rate={movie.vote_average}
        year={movie.release_date}
        story={movie.overview}
        votes={movie.vote_count}
        genres={[...movie.genres].map((g) => g.name).join(', ')}
      />
    </div>
  );
};

export const SerieDetails: React.FC<{ movie: SerieType }> = ({
  movie,
}) => {
  const imageDetailStyle = 'w-sm rounded-2xl absolute right-10 pulse-shadow';
  return (
    <div className="absolute m-auto top-40 left-0 h-4/5 text-center right-0">
      <Image
        className={imageDetailStyle}
        title={movie.name}
        url={movie.poster_path}
      />
      <Detail
        title={movie.name}
        rate={movie.vote_average}
        year={movie.first_air_date}
        story={movie.overview}
        votes={movie.vote_count}
        genres={[...movie.genres].map((g) => g.name).join(', ')}
      />
    </div>
  );
};
