import { motion } from 'motion/react';
import type { JSX } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

const MainNavigation = (): JSX.Element => {
  return (
    <header className=" flex justify-between align-middle absolute top-0 left-0 bg-transparent w-full p-6">
      <Link to={'/'}>
        <img className="w-30 h-30" src={logo} alt="MIK-HUB image" />
      </Link>
      <ul className="text-white text-2xl w-96 flex h-fit justify-between align-middle ">
        <li className="shadow-2xl hover:shadow-red-500">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'shadow-2xl shadow-red-500 text-red-500' : undefined
            }
            to={'movies'}
            end
          >
            MOVIES
          </NavLink>
        </li>
        <li className="shadow-2xl hover:shadow-red-500">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'shadow-2xl shadow-red-500 text-red-500' : undefined
            }
            to={'series'}
          >
            SERIES
          </NavLink>
        </li>
        <motion.li
          whileHover={{
            scale: 1.1,
            backgroundColor: '#ffffff',
            color: '#ff0000',
          }}
          transition={{ type: 'spring', stiffness: 600 }}
          className="bg-red-950 rounded-2xl p-1"
        >
          <NavLink to={'/login'}>LOGIN</NavLink>
        </motion.li>
      </ul>
    </header>
  );
};

export default MainNavigation;
