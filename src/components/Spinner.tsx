import { cn } from '#/lib/cn';

const Spinner = ({ size }: { size: number }) => {
  return (
    <div
      className={cn(
        'relative',
        `w-${size} h-${size}`,
        'animate-spin rounded-full border-4 border-secondary-400 border-t-white-full',
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
