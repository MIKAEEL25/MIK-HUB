import { useDispatch, useSelector } from 'react-redux';
import { favoritesActions } from '@/store/favorites';
import type { RootState } from '@/store';
import { Image, Detail } from '.';
import type { MovieType, SerieType } from './Type';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export const MovieDetails: React.FC<{ movie: MovieType }> = ({ movie }) => {
  const imageDetailStyle = 'w-sm rounded-2xl absolute right-10 pulse-shadow';
  const navigate = useNavigate();
  const isLoggedIn = useSelector(
    (state: RootState) => state.rootReducer.auth.isLogin
  );
  const dispatch = useDispatch();
  function addFavorite() {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      dispatch(favoritesActions.favoritePush(movie));
    }
  }
  return (
    <div className="absolute m-auto top-40 left-0 h-4/5 text-center right-0">
      <Image
        className={imageDetailStyle}
        title={movie.title}
        url={movie.poster_path}
      />
      <p className="absolute w-fit h-fit top top-4/5 right-8">
        <Button type={'button'} onClick={addFavorite}>
          Add To Favorites
        </Button>
      </p>
      <Detail
        title={movie.title}
        rate={movie.vote_average}
        year={movie.release_date}
        story={movie.overview}
        votes={movie.vote_count}
        genres={[...movie.genres].map((g) => g.name).join(', ')}
      />
    </div>
  );
};

export const SerieDetails: React.FC<{ movie: SerieType }> = ({ movie }) => {
  const imageDetailStyle = 'w-sm rounded-2xl absolute right-10 pulse-shadow';
  const navigate = useNavigate();
  const isLoggedIn = useSelector(
    (state: RootState) => state.rootReducer.auth.isLogin
  );
  const dispatch = useDispatch();
  function addFavorite() {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      dispatch(favoritesActions.favoritePush(movie));
    }
  }
  return (
    <div className="absolute m-auto top-40 left-0 h-4/5 text-center right-0">
      <Image
        className={imageDetailStyle}
        title={movie.name}
        url={movie.poster_path}
      />
      <p className="absolute w-fit h-fit top top-4/5 right-8">
        <Button type={'button'} onClick={addFavorite}>
          Add To Favorites
        </Button>
      </p>
      <Detail
        title={movie.name}
        rate={movie.vote_average}
        year={movie.first_air_date}
        story={movie.overview}
        votes={movie.vote_count}
        genres={[...movie.genres].map((g) => g.name).join(', ')}
      />
    </div>
  );
};
