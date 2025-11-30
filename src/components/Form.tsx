import type React from 'react';
import { useState, type JSX } from 'react';
import { Link, useNavigation, useNavigate } from 'react-router-dom';

interface SignUpFormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
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
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmiting = navigation.state === 'submitting';
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.confirmPassword.trim() !== formData.password.trim()) {
      setIsError(true);
      errorContent = '!passwords does not match';
      return;
    }
    setIsError(false);
    console.log(formData);
    navigate('/');
  };

  return (
    <>
      <div className="h-dvh w-dvw flex justify-center align-middle bg-linear-to-t from-red-950 to-black">
        {isError && (
          <p className="w-screen h-6 absolute top-32 text-2xl text-center">
            {errorContent}
          </p>
        )}
        <form onSubmit={submitHandler} className="max-w-md mx-auto my-auto">
          <div className="relative z-0 w-full mb-8 group ">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer autofill:transition-colors autofill:duration-[5000000ms]"
              placeholder=" "
              onChange={handleChange}
              value={formData.email}
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer autofill:transition-colors autofill:duration-[5000000ms]"
              placeholder=" "
              onChange={handleChange}
              value={formData.password}
              required
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer autofill:transition-colors autofill:duration-[5000000ms]"
              placeholder=" "
              onChange={handleChange}
              value={formData.confirmPassword}
              required
            />
            <label
              htmlFor="confirmPassword"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Confirm password
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer autofill:transition-colors autofill:duration-[5000000ms]"
                placeholder=" "
                onChange={handleChange}
                value={formData.firstName}
                required
              />
              <label
                htmlFor="firstName"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer autofill:transition-colors autofill:duration-[5000000ms]"
                placeholder=" "
                onChange={handleChange}
                value={formData.lastName}
                required
              />
              <label
                htmlFor="lastName"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6"></div>
          <button
            disabled={isSubmiting}
            type="submit"
            className="text-white bg-red-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            {isSubmiting ? 'submiting...' : 'submit'}
          </button>
          <button
            type="button"
            className="mx-20 border-red-500 border-2 rounded-4xl"
          >
            <Link className="p-3.5" to={'/'}>
              Back To Home
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
