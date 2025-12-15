import type { JSX } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

import NavigationItems from './NavigationItems';
import Logo from './Logo';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const MainNavigation = (): JSX.Element => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.rootReducer.auth.isLogin
  );
  const userName = useSelector(
    (state: RootState) => state.rootReducer.user.uName
  );
  return (
    <header className="flex justify-between align-middle fixed z-10 top-0 left-0 bg-black w-full p-6">
      <ul className="text-white text-3xl w-full flex h-fit justify-between">
        <Logo />
        <NavigationItems title="movies" />
        <NavigationItems title="series" />
        {isLoggedIn && <NavigationItems title="favorites" />}
        <Button>
          <Link className="p-3.5" to={'/login'}>
            {userName ? userName : 'LOGIN'}
          </Link>
        </Button>
      </ul>
    </header>
  );
};

export default MainNavigation;
