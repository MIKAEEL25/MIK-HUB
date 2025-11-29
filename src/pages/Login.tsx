import type { JSX } from 'react';
import { Link } from 'react-router-dom';

const Login = (): JSX.Element => {
  return (
    <>
      <p className="text-center">LOGIN</p>
      <Link to={'/'}>Back To HOME</Link>
    </>
  );
};

export default Login;
