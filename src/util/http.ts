import { QueryClient } from '@tanstack/react-query';
import type { search } from './Types';

export const queryClient = new QueryClient();

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWEzZGZlYzUyMDc2ZmU4NzY5ZGI3OGZiODk3Mjk4OSIsIm5iZiI6MTU5NzE0MzkyMy45NTIsInN1YiI6IjVmMzI3YjczMTk2NzU3MDAzN2IyMDg3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ji9ZWjlzQayocotWvlrHIxZl2Dd40PyYV9gzvBDtlNo';

async function generalFetch(url: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
}

export async function fetchMovies(page: number) {
  const url = `https://api.themoviedb.org/3/movie/popular?page=${page}`;
  return generalFetch(url);
}

export async function fetchSeries(page: number) {
  const url = `https://api.themoviedb.org/3/discover/tv?page=${page}`;
  return generalFetch(url);
}

export async function fetchDetails(id: string | number, sort: string) {
  const url = `https://api.themoviedb.org/3/${sort}/` + id;
  return generalFetch(url);
}

export async function fetchSearch({ searchTerm, sort }: search) {
  const url = `https://api.themoviedb.org/3/search/${sort}?api_key=${ACCESS_TOKEN}&query=${searchTerm}`;
  return generalFetch(url);
}

export async function fetchCast(id: string | number, sort: string) {
  const url = `https://api.themoviedb.org/3/${sort}/${id}/credits`;
  return generalFetch(url);
}
