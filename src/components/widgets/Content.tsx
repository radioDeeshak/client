import React from 'react';
import Image from 'next/image';
import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import Player from '~/components/widgets/Player';

const Content = ({ header, image, isAfterContent, id, hasBackground = false, audioSrc, audioList }: ContentProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={!hasBackground}
    containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}
  >
    <div className="flex justify-center">
      {audioSrc ? (
        <Player audioSrc={audioSrc} audioList={audioList || []} localStorageKey={''} audioType={''} />
      ) : (
        <div className="flex justify-center items-center animate-pulse w-32 h-8 bg-primary-500 dark:bg-primary-500 rounded-full text-center">
          <span>قريباً</span>
        </div>
      )}
    </div>
    <br />
    {image && (
      <div className="relative m-auto max-w-4xl flex justify-center">
        <Image
          className="w-72 h-60 rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"
          src={image.src}
          alt={image.alt}
          quality={50}
        />
      </div>
    )}
    <div className="mt-12 flex justify-center">
      {header && <Headline header={header} titleClass="text-3xl sm:text-5xl text-primary-500 dark:text-primary-500" />}
    </div>
  </WidgetWrapper>
);

export default Content;
