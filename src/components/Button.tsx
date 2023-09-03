import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonType = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  buttonType?: 'secondary' | 'inverted' | undefined;
  disabled?: boolean;
};

const Button = ({
  type,
  fullWidth,
  children,
  onClick,
  disabled,
  buttonType,
}: ButtonType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `rounded-lg px-5 py-2 font-medium text-white transition`,
        fullWidth && 'w-full',
        buttonType === 'secondary' && 'bg-slate-500 hover:bg-slate-400',
        buttonType === 'inverted' &&
          'border border-gray-500 hover:border-gray-700 hover:bg-gray-500',
        buttonType !== 'secondary' &&
          buttonType !== 'inverted' &&
          'bg-blue-500 hover:bg-blue-400',
      )}
    >
      {children}
    </button>
  );
};

export default Button;
