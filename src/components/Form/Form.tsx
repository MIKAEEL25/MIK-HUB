import type React from 'react';
import { useState, type JSX } from 'react';
import { Link, useNavigation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { userNameActions } from '../../store/userName';

import type { SignUpFormState } from './Types';
import Inputs from '../Input/Input';
import Button from '../Button/Button';
let errorContent: string;

const Form = (): JSX.Element => {
  const [isError, setIsError] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignUpFormState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmiting = navigation.state === 'submitting';
  const onChangeHadnler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.confirmPassword.trim() !== formData.password.trim()) {
      setIsError(true);
      errorContent = '!Passwords Does Not Match';
      return;
    }
    setIsError(false);
    dispatch(authActions.login());
    dispatch(userNameActions.userNameStore(formData.firstName));
    navigate('/');
  };

  return (
    <>
      <div className="h-dvh w-dvw flex justify-center align-middle bg-linear-to-t from-red-950 to-black">
        {isError && (
          <p className="w-screen animate-pulse h-6 absolute top-32 text-2xl text-center text-primary">
            {errorContent}
          </p>
        )}
        <form onSubmit={submitHandler} className="max-w-md mx-auto my-auto">
          <Inputs
            type="email"
            name="email"
            title="Email Address"
            handleChange={onChangeHadnler}
            inputValue={formData.email}
          />
          <Inputs
            type="password"
            name="password"
            title="Password"
            handleChange={onChangeHadnler}
            inputValue={formData.password}
          />
          <Inputs
            type="password"
            name="confirmPassword"
            title="confirm Password"
            handleChange={onChangeHadnler}
            inputValue={formData.confirmPassword}
          />
          <div className="grid md:grid-cols-2 md:gap-6">
            <Inputs
              type="text"
              name="firstName"
              title="First Name"
              handleChange={onChangeHadnler}
              inputValue={formData.firstName}
            />
            <Inputs
              type="text"
              name="lastName"
              title="Last Name"
              handleChange={onChangeHadnler}
              inputValue={formData.lastName}
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-6"></div>
          <Button type="submit">
            {isSubmiting ? 'Submiting...' : 'Submit'}
          </Button>
          <Button type="button">
            <Link className="p-3.5" to={'/'}>
              Back To Home
            </Link>
          </Button>
        </form>
      </div>
    </>
  );
};

export default Form;
