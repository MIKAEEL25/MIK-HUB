import { Outlet } from 'react-router-dom';

import Background from '../components/Background/Background';
import MainNavigation from '../components/MainNavigation';

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
