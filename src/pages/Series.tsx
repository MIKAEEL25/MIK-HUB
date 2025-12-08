import type { JSX } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LoadSpinner, Movie } from '../components';
import { fetchMovies } from '../util/http';

const Series = (): JSX.Element => {
  const { data, isLoading } = useQuery({
    queryKey: ['series'],
    queryFn: fetchMovies,
  });

  let content;

  if (isLoading) {
    content = <LoadSpinner />;
  }

  if (data) {
    content = (
      <Movie
        data={data.results}
        className="grid justify-items-center w-fit m-auto grid-rows-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-30"
      />
    );
  }

  return (
    <section className="absolute top-27 left-0 text-center right-0">
      <div className="w-fit m-auto">{content}</div>
    </section>
  );
};

export default Series;
