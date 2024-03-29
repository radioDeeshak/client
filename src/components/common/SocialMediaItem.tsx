import { twMerge } from 'tailwind-merge';
import { SocialMediaItemProps } from '~/shared/types';
import CTA from './CTA';

const SocialMediaItem = ({ embedUrl, containerClass, panelClass, callToAction }: SocialMediaItemProps) => {
  return (
    <div className={twMerge(`select-none rounded-lg shadow-lg`, containerClass)}>
      <div className={twMerge(`flex flex-col`, panelClass)}>
        <iframe
          src={embedUrl}
          width="100%"
          height="400"
          style={{ border: 'none' }}
          allow="encrypted-media"
          title="Social Media"
          allowFullScreen
          className="mb-6 overflow-hidden shadow-sm rounded-lg transition-transform transform-gpu hover:scale-105 duration-500 border-none"
        ></iframe>
        {callToAction && (
          <CTA callToAction={callToAction} containerClass="mt-6" linkClass="text-orange-500" targetBlank={true} />
        )}
      </div>
    </div>
  );
};

export default SocialMediaItem;
