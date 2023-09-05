import { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

const Container = ({
  children,
  fullWidth,
}: {
  children: ReactNode;
  fullWidth?: boolean;
}) => {
  return (
    <div
      className={twJoin(
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
