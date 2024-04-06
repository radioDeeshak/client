import bronzePoster from '~/assets/images/posters/poster6.jpg';
import goldPoster from '~/assets/images/posters/poster5.jpg';
import haqibaPoster from '~/assets/images/posters/poster4.jpg';
import rapPoster from '~/assets/images/posters/poster3.jpg';
import silverPoster from '~/assets/images/posters/poster2.jpg';
import sudanPoster from '~/assets/images/posters/poster.jpg';
import { ContentProps } from '~/shared/types';

// goldContent
export const goldContent: ContentProps = {
  id: 'goldContent',
  hasBackground: false,
  header: {
    title: 'ديشاك ذهبي',
    subtitle: 'أغنيات خالدة من العصر الذهبي',
    tagline: 'Deeshak Gold Content',
  },
  image: {
    src: goldPoster,
    alt: 'Deeshak Gold Image',
  },
  isReversed: false,
  isAfterContent: false,
  // audioSrc: 'https://papaya-biscochitos-d81c54.netlify.app/',
};

// haqibaContent
export const haqibaContent: ContentProps = {
  id: 'haqibaContent',
  hasBackground: false,
  header: {
    title: 'ديشاك حقيبة',
    subtitle: 'أغاني خالدة من الأربعينيات والخمسينيات والستينيات',
    tagline: 'Deeshak Haqiba Content',
  },
  image: {
    src: haqibaPoster,
    alt: 'Deeshak Haqiba Image',
  },
  isReversed: false,
  isAfterContent: false,
  audioSrc: 'https://papaya-biscochitos-d81c54.netlify.app/',
};

// rapContent
export const rapContent: ContentProps = {
  id: 'rapContent',
  hasBackground: false,
  header: {
    title: 'ديشاك الراب',
    subtitle: 'ديشاك راب يجلب لكم أفضل ما في ساحة الراب السودانية.',
    tagline: 'Deeshak Rap Content',
  },
  image: {
    src: rapPoster,
    alt: 'Deeshak Rap Image',
  },
  isReversed: false,
  isAfterContent: false,
  // audioSrc: 'https://papaya-biscochitos-d81c54.netlify.app/',
};

export const silverContent: ContentProps = {
  id: 'silverContent',
  hasBackground: false,
  header: {
    title: 'ديشاك فضي',
    subtitle: 'أغاني خالدة من السبعينيات والثمانينيات',
    tagline: 'Deeshak Silver Content',
  },
  image: {
    src: silverPoster,
    alt: 'Deeshak Silver Image',
  },
  isReversed: false,
  isAfterContent: false,
  // audioSrc: 'https://papaya-biscochitos-d81c54.netlify.app/',
};

// sudanContent
export const sudanContent: ContentProps = {
  id: 'sudanContent',
  hasBackground: false,
  header: {
    title: 'ديشاك سودان',
    subtitle: 'رحلة ساحرة إلى أرض الخير',
    tagline: 'Deeshak Sudan Content',
  },
  image: {
    src: sudanPoster,
    alt: 'Deeshak Sudan Image',
  },
  isReversed: false,
  isAfterContent: false,
  audioSrc: 'https://papaya-biscochitos-d81c54.netlify.app/',
};

// bronzeContent
export const bronzeContent: ContentProps = {
  id: 'bronzeContent',
  hasBackground: false,
  header: {
    title: 'ديشاك برونزي',
    subtitle: 'أغاني خالدة من التسعينيات',
    tagline: 'Deeshak Bronze Content',
  },
  image: {
    src: bronzePoster,
    alt: 'Deeshak Bronze Image',
  },
  isReversed: false,
  isAfterContent: false,
  audioSrc: '',
  // audioSrc: 'https://papaya-biscochitos-d81c54.netlify.app/',
};
