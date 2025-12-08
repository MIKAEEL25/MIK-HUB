import type { JSX } from 'react';
import { motion } from 'motion/react';
import type { ButtonType } from './Type';

const Button = ({
  children,
  onClick,
  disabled,
  type,
}: ButtonType): JSX.Element => {
  return (
    <motion.button
      disabled={disabled}
      onClick={onClick}
      type={type}
      whileHover={{
        scale: 1.1,
        backgroundColor: '#ffffff',
        color: '#ff0000',
      }}
      transition={{ type: 'spring', stiffness: 600 }}
      className="bg-primary rounded-2xl p-1 m-1.5 h-fit"
    >
      {children}
    </motion.button>
  );
};

export default Button;
