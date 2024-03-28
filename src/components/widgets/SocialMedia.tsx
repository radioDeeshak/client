'use client';

import Link from 'next/link';
import { SocialMediaProps, SocialMediaItemProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import SocialMediaItem from '../common/SocialMediaItem';

const SocialMedia = ({ header, items, containerClass, hasBackground }: SocialMediaProps) => {
  return (
    <WidgetWrapper containerClass={containerClass} hasBackground={!hasBackground}>
      {header && <Headline header={header} titleClass="text-4xl md:text-5xl text-primary-500 dark:text-primary-500" />}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item: SocialMediaItemProps, index: number) => (
          <SocialMediaItem key={index} {...item} panelClass="card h-full relative flex flex-col text-center p-8" />
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default SocialMedia;
