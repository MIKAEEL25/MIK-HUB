import { Outlet } from 'react-router-dom';

import { Background, MainNavigation } from '../components';

const RootLayout: React.FC = () => {
  return (
    <>
      <Background />
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
