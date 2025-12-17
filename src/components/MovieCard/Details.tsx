import { useDispatch, useSelector } from 'react-redux';
import { favoritesActions } from '@/store/favorites';
import type { RootState } from '@/store';
import { Image, Detail, Cast } from './Index';
import type { AllMovie, CastType } from './Type';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Details: React.FC<{ movie: AllMovie; cast: CastType[] }> = ({
  movie,
  cast,
}) => {
  // const imageDetailStyle = '2xl:w-sm  m-auto rounded-2xl xl:absolute xl:right-10 pulse-shadow';
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
    <div className="absolute m-auto top-40 left-0 h-fit 2xl:h-4/5 text-center right-0">
      <Image
        className={
          '2xl:w-sm w-80 m-auto rounded-2xl xl:absolute xl:right-10 pulse-shadow'
        }
        title={movie.title}
        url={movie.poster_path}
      />
      <p className="mt-6 2xl:absolute 2xl:w-fit 2xl:top-4/5 2xl:right-8">
        <Button type={'button'} onClick={addFavorite}>
          Add To Favorites
        </Button>
      </p>
      <Detail
        title={movie.title ? movie.title : movie.name}
        rate={movie.vote_average}
        year={movie.release_date ? movie.release_date : movie.first_air_date}
        story={movie.overview}
        votes={movie.vote_count}
        genres={[...movie.genres].map((g) => g.name).join(', ')}
      />
      <Cast cast={cast} />
    </div>
  );
};

export default Details;
