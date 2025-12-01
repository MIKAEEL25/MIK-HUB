import type { JSX } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Logo = (): JSX.Element => {
  return (
    <Link to={'/'}>
      <img className="w-30 h-30" src={logo} alt="MIK-HUB image" />
    </Link>
  );
};

export default Logo;
