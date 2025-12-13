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
    throw new Error('Failed to fetch movie');
  }
  const data = await response.json();
  return data;
}

export async function fetchSeries() {
  const url = 'https://api.themoviedb.org/3/discover/tv';
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
    throw new Error('Failed to fetch series');
  }
  const data = await response.json();
  return data;
}

export async function fetchSerie(id: number | string) {
  const url = 'https://api.themoviedb.org/3/tv/' + id;
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
    throw new Error('Failed to fetch serie');
  }
  const data = await response.json();
  return data;
}

interface search {
  searchTerm: string | undefined;
  signal?: AbortSignal;
  sort: string
}
export async function fetchSearch({ searchTerm, signal , sort }: search) {
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWEzZGZlYzUyMDc2ZmU4NzY5ZGI3OGZiODk3Mjk4OSIsIm5iZiI6MTU5NzE0MzkyMy45NTIsInN1YiI6IjVmMzI3YjczMTk2NzU3MDAzN2IyMDg3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ji9ZWjlzQayocotWvlrHIxZl2Dd40PyYV9gzvBDtlNo';
  const url = `https://api.themoviedb.org/3/search/${sort}?api_key=${accessToken}&query=${searchTerm}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    signal: signal,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data;
}




export async function fetchCast(id: string | number , sort : string) {
  const url = `https://api.themoviedb.org/3/${sort}/${id}/credits`;
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
    throw new Error('Failed to fetch cast');
  }
  const data = await response.json();
  return data;
}
