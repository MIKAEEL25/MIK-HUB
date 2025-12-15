import { useSelector } from 'react-redux';
import type { RootState } from '@/store/index';
import type { JSX } from 'react';
import { Movie } from '@/components';

const Favorites = (): JSX.Element => {
  const favorites = useSelector(
    (state: RootState) => state.rootReducer.favorite
  );
  const isLoggedIn = useSelector(
    (state: RootState) => state.rootReducer.auth.isLogin
  );
  const uniqueArr = [...new Set(favorites)];

  let content;
  if (!isLoggedIn) {
    content = (
      <p className="text-5xl text-center text-primary animate-pulse">
        Please Login First!
      </p>
    );
  }
  if (isLoggedIn) {
    content = (
      <>
        {uniqueArr.length === 0 ? (
          'No Favorite Movie'
        ) : (
          <Movie data={uniqueArr} />
        )}
      </>
    );
  }
  return (
    <>
      <section className="absolute left-0 text-center right-0">
        <div className="w-fit m-auto mt-56">{content}</div>
      </section>
    </>
  );
};
export default Favorites;
