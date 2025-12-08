import { Outlet } from 'react-router-dom';

import { Background, MainNavigation, SearchBar } from '../components';

const RootLayout: React.FC = () => {
  return (
    <>
      <Background />
      <MainNavigation />
      <SearchBar />
      <Outlet />
    </>
  );
};

export default RootLayout;
