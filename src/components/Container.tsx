import clsx from 'clsx';
import { ReactNode } from 'react';

const Container = ({
  children,
  fullWidth,
}: {
  children: ReactNode;
  fullWidth?: boolean;
}) => {
  return (
    <div
      className={clsx(
        `max-w-[90rem]`,
        fullWidth && 'w-full',
        !fullWidth && 'w-[96%]',
        `mx-auto`,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
