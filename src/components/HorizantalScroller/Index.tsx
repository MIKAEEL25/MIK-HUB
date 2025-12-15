import HorizontalScroller from './HorizantalScroller';
import { MovieCard } from '../MovieCard/MovieCard';
import type { AllMovie } from '../MovieCard/Type';

export const RootMovie: React.FC<{ data: AllMovie[]; route: string }> = ({
  data,
  route,
}) => {
  return (
    <HorizontalScroller>
      {data.map((m: AllMovie) => (
        <div key={m.id} className="min-w-[180px] ">
          <MovieCard movie={m} route={`${route}`} />
        </div>
      ))}
    </HorizontalScroller>
  );
};
