import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../util/http';
import { sampleMovies } from '../util/Dummy-movies';
import Movie from '../components/MovieCard/Movie';

const Movies = () => {
  const { data } = useQuery({ queryKey: ['movies'], queryFn: fetchMovies });
  console.log(data);
  return (
    <div className="absolute top-27 left-0 text-center right-0">
      <Movie data={sampleMovies} />
    </div>
  );
};

export default Movies;
