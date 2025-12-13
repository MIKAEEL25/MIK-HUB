import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../util/http';
import { LoadSpinner, Movie, SearchBar } from '@/components';
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
  if (!data && !isLoading) {
    content = (
      <p className="text-primary animate-pulse text-4xl text-center">
        Sorry , Failed To Fetch Movie
      </p>
    );
  }

  return (
    <section className="absolute top-50 left-0 text-center right-0">
      <div className='mt-0'>
        <SearchBar route='movies' sort='movie' />
      </div>
      <div className="w-fit m-auto mt-56">{content}</div>
    </section>
  );
};

export default Movies;
