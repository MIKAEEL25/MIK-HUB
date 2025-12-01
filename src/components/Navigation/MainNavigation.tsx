import { motion } from 'motion/react';
import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



import type { RootState } from '../../store';
import NavigationItems from './NavigationItems';
import Logo from './Logo';

const MainNavigation = (): JSX.Element => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.rootReducer.auth.isLogin
  );
  const userName = useSelector(
    (state: RootState) => state.rootReducer.user.uName
  );
  return (
    <header className=" flex justify-between align-middle absolute top-0 left-0 bg-transparent w-full p-6">
      <Logo />
      <ul className="text-white text-2xl w-2/5 flex h-fit justify-between align-middle">
        <NavigationItems title="movies" />
        <NavigationItems title="series" />
        {isLoggedIn && <NavigationItems title="favorites" />}
        <motion.li
          whileHover={{
            scale: 1.1,
            backgroundColor: '#ffffff',
            color: '#ff0000',
          }}
          transition={{ type: 'spring', stiffness: 600 }}
          className="bg-red-900 rounded-2xl p-1"
        >
          <NavLink to={'/login'}>
            {isLoggedIn ? `${userName}` : 'LOGIN'}
          </NavLink>
        </motion.li>
      </ul>
    </header>
  );
};

export default MainNavigation;
