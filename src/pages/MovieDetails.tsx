import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { LoadSpinner, MovieDetails as Details, Cast } from '@/components';
import { fetchMovie, fetchMoviesCast } from '../util/http';

const MovieDetails = () => {
  const movieId = useParams();
  const {
    data: movie,
    isLoading: movieLoading,
    isSuccess: movieSuccess,
  } = useQuery({
    queryKey: ['movie', movieId.movieId],
    queryFn: () => fetchMovie(Number(movieId.movieId)),
  });

  const { data: cast, isLoading: castLoading } = useQuery({
    queryKey: ['cast', movieId.movieId],
    queryFn: () => fetchMoviesCast(Number(movieId.movieId)),
    enabled: movieSuccess,
  });

  let content;

  if (movieLoading || castLoading) {
    content = <LoadSpinner />;
  }
  if (movie || cast) {
    content = (
      <>
        <Details movie={movie} />
        {cast && <Cast cast={cast.cast} />}
      </>
    );
  }
  if (!movie && !cast && !movieLoading) {
    content = (
      <p className="text-primary absolute top-1/2 w-full animate-pulse text-4xl text-center">
        Sorry , Failed To Fetch Movie
      </p>
    );
  }

  return <>{content}</>;
};

export default MovieDetails;
