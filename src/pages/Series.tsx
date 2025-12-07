import type { JSX } from 'react';
import { useQuery } from '@tanstack/react-query';
import {Movie} from '../components';
import { fetchMovies } from '../util/http';

const Series = (): JSX.Element => {
 const { data, isLoading } = useQuery({
    queryKey: ['series'],
    queryFn: fetchMovies,
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
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

export default Series;
