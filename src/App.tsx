import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './util/http';
import MovieDetails from './pages/MovieDetails';
import SerieDetails from './pages/SerieDetails';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        path: 'movies',
        element: <Movies />,
      },
      {
        path: 'series',
        element: <Series />,
      },
      { path: '/movies/:movieId', element: <MovieDetails /> },
      { path: '/series/:serieId', element: <SerieDetails /> },
      { path: 'favorites', element: <Favorites /> },
    ],
  },
  { path: '/login', element: <Login /> },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
