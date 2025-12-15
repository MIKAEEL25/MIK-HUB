import { useSelector } from 'react-redux';
import type { RootState } from '@/store/index';
import type { JSX } from 'react';
import { Movie } from '@/components';

const Favorites = (): JSX.Element => {
  const favorites = useSelector(
    (state: RootState) => state.rootReducer.favorite
  );
  const uniqueArr = [...new Set(favorites)];
  return (
    <section className="absolute left-0 text-center right-0">
      <div className="w-fit m-auto mt-56">
        {uniqueArr.length === 0 ? (
          'No Favorite Movie'
        ) : (
          <Movie data={uniqueArr} />
        )}
      </div>
    </section>
  );
};
export default Favorites;
