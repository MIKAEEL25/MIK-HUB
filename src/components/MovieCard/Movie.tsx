import { MovieCard, SerieCard } from '..';
import type { MovieType, SerieType } from './Type';

export const Movie: React.FC<{ data: MovieType[] }> = ({ data }) => {
  return (
    <div className="grid justify-items-center w-fit m-auto grid-rows-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-30">
      {data.map((m: MovieType) => (
        <MovieCard route="" key={m.id} movie={m} />
      ))}
    </div>
  );
};
export const Serie: React.FC<{ data: SerieType[] }> = ({ data }) => {
  return (
    <div className="grid justify-items-center w-fit m-auto grid-rows-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-30">
      {data.map((m: SerieType) => (
        <SerieCard route="" key={m.id} movie={m} />
      ))}
    </div>
  );
};

