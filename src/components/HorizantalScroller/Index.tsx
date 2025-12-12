import HorizontalScroller from './HorizantalScroller';
import { MovieCard } from '../MovieCard/Cards';
import type { MovieType } from '../MovieCard/Type';

export const RootMovie: React.FC<{ data: MovieType[]; route: string }> = ({
  data,
  route,
}) => {
  return (
    <HorizontalScroller>
      {data.map((m: MovieType) => (
        <div key={m.id} className="min-w-[180px] ">
          <MovieCard movie={m} route={`${route}`} />
        </div>
      ))}
    </HorizontalScroller>
  );
};
