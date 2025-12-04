import type { JSX } from 'react';
import Movie from '../components/MovieCard/Movie';
import { sampleSeries } from '../util/Dummy-movies';

const Series = (): JSX.Element => {
  return (
    <div className="absolute top-27 left-0 text-center right-0">
      <Movie data={sampleSeries} />
    </div>
  );
};

export default Series;
