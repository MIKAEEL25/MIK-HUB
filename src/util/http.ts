import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function fetchMovies() {
  const url = 'https://api.themoviedb.org/3/movie/popular';
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWEzZGZlYzUyMDc2ZmU4NzY5ZGI3OGZiODk3Mjk4OSIsIm5iZiI6MTU5NzE0MzkyMy45NTIsInN1YiI6IjVmMzI3YjczMTk2NzU3MDAzN2IyMDg3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ji9ZWjlzQayocotWvlrHIxZl2Dd40PyYV9gzvBDtlNo';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data;
}

export async function fetchMovie(id: string | number) {
  const url = 'https://api.themoviedb.org/3/movie/' + id;
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWEzZGZlYzUyMDc2ZmU4NzY5ZGI3OGZiODk3Mjk4OSIsIm5iZiI6MTU5NzE0MzkyMy45NTIsInN1YiI6IjVmMzI3YjczMTk2NzU3MDAzN2IyMDg3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ji9ZWjlzQayocotWvlrHIxZl2Dd40PyYV9gzvBDtlNo';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data;
}

export async function fetchSeries() {
  const url = 'https://api.themoviedb.org/3/movie/popular';
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWEzZGZlYzUyMDc2ZmU4NzY5ZGI3OGZiODk3Mjk4OSIsIm5iZiI6MTU5NzE0MzkyMy45NTIsInN1YiI6IjVmMzI3YjczMTk2NzU3MDAzN2IyMDg3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ji9ZWjlzQayocotWvlrHIxZl2Dd40PyYV9gzvBDtlNo';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data;
}

export async function fetchSerie(id: string | number) {
  const url = 'https://api.themoviedb.org/3/movie/' + id;
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWEzZGZlYzUyMDc2ZmU4NzY5ZGI3OGZiODk3Mjk4OSIsIm5iZiI6MTU5NzE0MzkyMy45NTIsInN1YiI6IjVmMzI3YjczMTk2NzU3MDAzN2IyMDg3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ji9ZWjlzQayocotWvlrHIxZl2Dd40PyYV9gzvBDtlNo';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data;
}
