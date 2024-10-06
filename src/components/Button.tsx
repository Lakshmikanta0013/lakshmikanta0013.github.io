import { ReactNode } from 'react';

import { cn } from '#/lib/cn';

type ButtonType = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  buttonType?: 'secondary' | 'inverted' | undefined;
  disabled?: boolean;
  className?: string;
};

const Button = ({
  type,
  fullWidth,
  children,
  onClick,
  disabled,
  buttonType,
  className,
}: ButtonType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `transition-color flex items-center justify-center gap-4 rounded-lg px-5 py-2 font-medium duration-300 disabled:bg-dark-500 disabled:text-white-full`,
        fullWidth && 'w-full',
        buttonType === 'secondary' &&
          'bg-secondary text-white hover:bg-secondary-500',
        buttonType === 'inverted' &&
          'border-2 border-primary text-dark hover:bg-primary hover:text-white',
        buttonType !== 'secondary' &&
          'bg-primary text-white hover:bg-primary-600 dark:bg-primary-500 dark:text-dark-800 dark:hover:bg-primary-400 ',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
