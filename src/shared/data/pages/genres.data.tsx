import bronzePoster from '~/assets/images/posters/poster6.jpg';
import goldPoster from '~/assets/images/posters/poster5.jpg';
import haqibaPoster from '~/assets/images/posters/poster4.jpg';
import rapPoster from '~/assets/images/posters/poster3.jpg';
import silverPoster from '~/assets/images/posters/poster2.jpg';
import sudanPoster from '~/assets/images/posters/poster.jpg';

import { GenreProps, HeroProps } from '~/shared/types';

export const genresHero: HeroProps = {
  title: 'راديو ديشاك',
  subtitle: 'راديو المهاجر والمغترب السوداني',
};

export const genresContent: GenreProps = {
  id: 'genres',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        <span className="whitespace-nowrap">أجمل الأغنيات السودانية</span>
      </>
    ),
    subtitle: 'استمتع بأفضل الموسيقى السودانية واستكشف عالم الإيقاعات والألحان الساحرة',
    tagline: 'Genres',
  },
  items: [
    {
      image: {
        src: goldPoster,
        alt: 'Deeshak Gold Image',
      },
      title: 'ديشاك ذهبي',
      description: 'أغنيات خالدة من العصر الذهبي',
      callToAction: {
        text: 'قريباً',
        href: '/genres/gold',
      },
    },
    {
      image: {
        src: haqibaPoster,
        alt: 'Deeshak Haqiba Image',
      },
      title: 'ديشاك حقيبة',
      description: 'أغاني خالدة من الأربعينيات والخمسينيات والستينيات',
      callToAction: {
        text: 'أسمع',
        href: '/genres/haqiba',
      },
    },
    {
      image: {
        src: sudanPoster,
        alt: 'Deeshak Sudan Image',
      },
      title: 'ديشاك سودان',
      description: 'رحلة ساحرة إلى أرض الخير',
      callToAction: {
        text: 'أسمع',
        href: '/genres/sudan',
      },
    },
    {
      image: {
        src: rapPoster,
        alt: 'Deeshak Rap Image',
      },
      title: 'ديشاك راب',
      description: 'ديشاك راب يجلب لكم أفضل ما في ساحة الراب السودانية.',
      callToAction: {
        text: 'قريباً',
        href: '/genres/rap',
      },
    },
    {
      image: {
        src: bronzePoster,
        alt: 'Deeshak Bronze Image',
      },
      title: 'ديشاك برونزي',
      description: 'أغاني خالدة من التسعينيات',
      callToAction: {
        text: 'قريباً',
        href: '/genres/bronze',
      },
    },
    {
      image: {
        src: silverPoster,
        alt: 'Deeshak Silver Image',
      },
      title: 'ديشاك فضي',
      description: 'أغاني خالدة من السبعينيات والثمانينيات',
      callToAction: {
        text: 'قريباً',
        href: '/genres/silver',
      },
    },
  ],
};
