import MovieCard from './MovieCard';
import type { MovieType } from './Type';

const Movie: React.FC<{ data: MovieType[] }> = ({data}) => {
  return (
    <div className="grid justify-items-center w-fit m-auto grid-rows-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-30">
      {data.map((m: MovieType) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
};

export default Movie;
