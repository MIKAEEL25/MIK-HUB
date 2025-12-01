import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Login from './pages/Login';
import Favorites from './pages/Favorites';

const router = createBrowserRouter([
  {
    path: '/',
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
      { path: 'favorites', element: <Favorites /> },
    ],
  },
  { path: '/login', element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
