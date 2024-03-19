import { BackgroundProps } from '~/shared/types';

const Background = ({ children, hasBackground }: BackgroundProps) => {
  return (
    <div className={`absolute inset-0 ${hasBackground ? 'bg-zinc-50 dark:bg-zinc-800' : 'bg-transparent'}`}>
      {children}
    </div>
  );
};

export default Background;
