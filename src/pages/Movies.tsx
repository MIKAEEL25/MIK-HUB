import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../util/http';
import { LoadSpinner, Movie } from '../components';
const Movies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });

  let content;

  if (isLoading) {
    content = <LoadSpinner />;
  }

  if (data) {
    content = <Movie data={data.results} />;
  }

  return (
    <section className="absolute top-27 left-0 text-center right-0">
      <div className="w-fit m-auto">{content}</div>
    </section>
  );
};

export default Movies;
