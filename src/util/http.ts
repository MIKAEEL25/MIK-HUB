import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function fetchMovies() {
  const url = 'https://api.themoviedb.org/3/movie/changes';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer Authorazition',
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
}
