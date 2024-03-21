import Image from 'next/image';
import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import Play from '~/components/widgets/Play';

const Content = ({ header, image, isAfterContent, id, hasBackground = false }: ContentProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={!hasBackground}
    containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}
  >
    {image && (
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
    <div className="mt-12 flex justify-center">
      {header && <Headline header={header} titleClass="text-3xl sm:text-5xl text-primary-500 dark:text-primary-500" />}
    </div>
    <div className="flex justify-center">
      <Play />
    </div>
  </WidgetWrapper>
);

export default Content;
