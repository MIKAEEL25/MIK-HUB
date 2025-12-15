import { MovieCard } from '..';
import type { AllMovie } from './Type';

export const Movie: React.FC<{ data: AllMovie[] }> = ({ data }) => {
  return (
    <div className="grid justify-items-center w-fit m-auto grid-rows-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-30">
      {data.map((m: AllMovie) => (
        <MovieCard
          route={m.title ? '/movies/' : '/series/'}
          key={m.id}
          movie={m}
        />
      ))}
    </div>
  );
};
