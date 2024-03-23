import { GalleryProps } from '~/shared/types';

import studioPic1 from '~/assets/images/gallery/studio1.jpg';
import studioPic2 from '~/assets/images/gallery/studio2.jpg';
import studioPic3 from '~/assets/images/gallery/studio3.jpg';
import studioPic4 from '~/assets/images/gallery/studio4.jpg';
import studioPic5 from '~/assets/images/gallery/studio5.jpg';
import studioPic6 from '~/assets/images/gallery/studio6.jpg';
import studioPic7 from '~/assets/images/gallery/studio7.jpg';
import studioPic8 from '~/assets/images/gallery/studio8.jpg';
import studioPic9 from '~/assets/images/gallery/studio9.jpg';
import studioPic10 from '~/assets/images/gallery/studio10.jpg';
import studioPic11 from '~/assets/images/gallery/studio11.jpg';
import studioPic12 from '~/assets/images/gallery/studio12.jpg';

export const galleryContent: GalleryProps = {
  id: 'galleryContent',
  header: {
    title: 'استوديو ديشاك',
    subtitle: 'استوديو ديشاك يعتبر من أفضل الاستديوهات في السودان',
    tagline: 'Gallery',
  },
  items: [
    {
      image: {
        src: studioPic1,
        alt: 'Ajman Studio Pic 1',
      },
    },
    {
      image: {
        src: studioPic2,
        alt: 'Ajman Studio Pic 2',
      },
    },
    {
      image: {
        src: studioPic3,
        alt: 'Ajman Studio Pic 3',
      },
    },
    {
      image: {
        src: studioPic4,
        alt: 'Ajman Studio Pic 4',
      },
    },
    {
      image: {
        src: studioPic5,
        alt: 'Ajman Studio Pic 5',
      },
    },
    {
      image: {
        src: studioPic6,
        alt: 'Ajman Studio Pic 6',
      },
    },
    {
      image: {
        src: studioPic7,
        alt: 'Ajman Studio Pic 7',
      },
    },
    {
      image: {
        src: studioPic8,
        alt: 'Ajman Studio Pic 8',
      },
    },
    {
      image: {
        src: studioPic9,
        alt: 'Ajman Studio Pic 9',
      },
    },
    {
      image: {
        src: studioPic10,
        alt: 'Ajman Studio Pic 10',
      },
    },
    {
      image: {
        src: studioPic11,
        alt: 'Ajman Studio Pic 11',
      },
    },
    {
      image: {
        src: studioPic12,
        alt: 'Ajman Studio Pic 12',
      },
    },
  ],
  columns: 3,
  isImageDisplayed: true,
  isBeforeContent: false,
  isAfterContent: false,
};
