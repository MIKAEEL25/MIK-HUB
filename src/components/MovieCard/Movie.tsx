import { MovieCard } from '..';
import type { AllMovie } from './Type';

const Movie: React.FC<{ data: AllMovie[] }> = ({ data }) => {
  return (
    <div className="grid justify-items-center w-fit m-auto grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20 2xl:gap-30">
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
export default Movie;
