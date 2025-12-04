import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const movieId = useParams();
  console.log(movieId.movieId);
  return (
    <div className="absolute top-40 left-0 text-center right-0">
      {movieId.movieId}
    </div>
  );
};

export default MovieDetails;
