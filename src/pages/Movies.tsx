// import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../util/http';
import Movie from '../components/MovieCard/Movie';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetchMovies().then((data) => {
      setShows(data);
    });
  }, []);

  return (
    <div className="absolute top-27 left-0 text-center right-0">
      <Movie data={shows} />
    </div>
  );
};

export default Movies;
