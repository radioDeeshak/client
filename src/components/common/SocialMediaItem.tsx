import { useEffect, useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { SocialMediaItemProps } from '~/shared/types';
import CTA from './CTA';
import DividerLine from './DividerLine';

const SocialMediaItem = ({
  name,
  job,
  testimonial,
  image,
  isTestimonialUp,
  hasDividerLine,
  startSlice,
  endSlice,
  containerClass,
  panelClass,
  imageClass,
  dataClass,
  nameJobClass,
  nameClass,
  jobClass,
  testimonialClass,
  callToAction,
}: SocialMediaItemProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={twMerge(`select-none rounded-lg shadow-lg`, containerClass)}>
      <div className={twMerge(`flex ${isTestimonialUp ? 'flex-col-reverse' : 'flex-col'}`, panelClass)}>
        {((image && name) || (name && job)) && (
          <>
            <div className={twMerge('flex items-center', dataClass)}>
              {isClient && image && (
                <Image
                  src={image.src}
                  width={120}
                  height={120}
                  alt={image.alt}
                  className={twMerge('object-cover rounded-md shadow-lg bg-gray-500 dark:bg-slate-700', imageClass)}
                />
              )}

              <div className={twMerge('flex flex-col justify-center ml-4', nameJobClass)}>
                {name && <h3 className={twMerge('font-semibold text-lg', nameClass)}>{name}</h3>}
                {job && <span className={twMerge('text-gray-600 text-sm', jobClass)}>{job}</span>}
              </div>
            </div>

            {hasDividerLine && <DividerLine />}
          </>
        )}

        {testimonial && (
          <blockquote className={twMerge('flex-auto mt-4', testimonialClass)}>
            <p className="font-light text-gray-600">
              {startSlice !== undefined && endSlice !== undefined
                ? `" ${testimonial.slice(Number(startSlice), Number(endSlice))}... "`
                : `" ${testimonial} "`}
            </p>
          </blockquote>
        )}

        {callToAction && <CTA callToAction={callToAction} containerClass="mt-8" linkClass="text-orange-500" />}
      </div>
    </div>
  );
};

export default SocialMediaItem;
