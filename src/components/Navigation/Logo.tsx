import type { JSX } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Logo = (): JSX.Element => {
  return (
    <Link to={'/'}>
      <img className="w-20 h-20" src={logo} alt="MIK-HUB Logo" />
    </Link>
  );
};

export default Logo;
