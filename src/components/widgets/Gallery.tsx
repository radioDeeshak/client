import Image from 'next/image';
import { GalleryProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Headline from '../common/Headline';
import ItemGrid from '../common/ItemGrid';

const Gallery = ({
  header,
  items,
  columns,
  isImageDisplayed,
  image,
  isBeforeContent,
  isAfterContent,
  id,
  hasBackground = false,
}: GalleryProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={!hasBackground}
    containerClass={`${isBeforeContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}
  >
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl text-primary-500 dark:text-primary-500" />}
    {image && isImageDisplayed && (
      <div className="relative m-auto max-w-4xl flex justify-center">
        {' '}
        <Image
          className="w-48 h-48 rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"
          src={image.src}
          alt={image.alt}
          quality={50}
        />
      </div>
    )}
    {items && <ItemGrid items={items} columns={columns} isImageDisplayed={isImageDisplayed} />}
  </WidgetWrapper>
);

export default Gallery;
