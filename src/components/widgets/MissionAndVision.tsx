import Image from 'next/image';
import { GenreProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Headline from '../common/Headline';

const MissionAndValues = ({
  header,
  items,
  columns = 2,
  image,
  isBeforeContent,
  isAfterContent,
  id,
  hasBackground = false,
  isImageDisplayed = true,
}: GenreProps) => (
  <WidgetWrapper
    id={id}
    hasBackground={hasBackground}
    containerClass={`${isBeforeContent ? 'md:pb-8 lg:pb-12' : ''} ${isAfterContent ? 'pt-0 md:pt-0 lg:pt-0' : ''}`}
  >
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
    {isImageDisplayed && (
      <div aria-hidden="true" className="aspect-w-16 aspect-h-7">
        {image && (
          <Image
            className="w-full h-80 object-cover rounded-xl mx-auto bg-zinc-800 shadow-lg"
            src={image.src}
            alt={image.alt}
            width={728}
            height={320}
            sizes="(max-width: 64rem) 100vw, 1024px"
          />
        )}
      </div>
    )}
  </WidgetWrapper>
);

export default MissionAndValues;
