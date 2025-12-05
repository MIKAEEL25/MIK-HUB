import { Image, Detail } from './Index';
import type { MovieType } from './Type';

const Details: React.FC<{ movie: MovieType }> = ({ movie }) => {
  const imageDetailStyle =
    'w-sm rounded-2xl shadow-xl shadow-primary/50 absolute right-10';
  return (
    <div className="absolute m-auto top-27 left-0 h-4/5 text-center right-0">
      <Image
        className={imageDetailStyle}
        title={movie.title}
        url={movie.imageUrl}
      />
      <Detail title={movie.title} genre={movie.genre} year={movie.year} />
    </div>
  );
};

export default Details;
