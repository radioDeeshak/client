import heroImg from '~/assets/images/posters/poster3.jpg';
import bronzePoster from '~/assets/images/posters/poster6.jpg';
import goldPoster from '~/assets/images/posters/poster5.jpg';
import haqibaPoster from '~/assets/images/posters/poster4.jpg';
import rapPoster from '~/assets/images/posters/poster3.jpg';
import silverPoster from '~/assets/images/posters/poster2.jpg';
import sudanPoster from '~/assets/images/posters/poster.jpg';

import { ContentProps, GenreProps, HeroProps } from '../../types';

export const homeHero: HeroProps = {
  title: <>مجموعة راديو ديشاك</>,
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2"></span>{' '}
        راديو المهاجر والمغترب السوداني
      </span>{' '}
    </>
  ),
  image: {
    src: heroImg,
    alt: 'Hero Radio Deeshak!',
  },
};

export const homeGenres: GenreProps = {
  id: 'genres-on-home',
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
      title: 'ديشاك ذهبي',
      description: 'أغنيات خالدة من العصر الذهبي',
      image: {
        src: goldPoster,
        alt: 'Deeshak Gold Image',
      },
      callToAction: {
        text: 'قريباً',
        href: '/genres/gold',
      },
    },
    {
      title: 'ديشاك حقيبة',
      description: 'أغاني خالدة من عصر الأربعينيات والخمسينيات والستينيات',
      image: {
        src: haqibaPoster,
        alt: 'Deeshak Haqiba Image',
      },
      callToAction: {
        text: 'أسمع',
        href: '/genres/haqiba',
      },
    },
    {
      title: 'ديشاك سودان',
      description: 'رحلة ساحرة إلى أرض الخير',
      image: {
        src: sudanPoster,
        alt: 'Deeshak Sudan Image',
      },
      callToAction: {
        text: 'أسمع',
        href: '/genres/sudan',
      },
    },
    {
      title: 'ديشاك راب',
      description: 'ديشاك راب يجلب لكم أفضل ما في ساحة الراب السودانية',
      image: {
        src: rapPoster,
        alt: 'Deeshak Rap Image',
      },
      callToAction: {
        text: 'قريباً',
        href: '/genres/rap',
      },
    },
    {
      title: 'ديشاك برونزي',
      description: 'أغاني خالدة من عصر التسعينيات',
      image: {
        src: bronzePoster,
        alt: 'Deeshak Bronze Image',
      },
      callToAction: {
        text: 'قريباً',
        href: '/genres/bronze',
      },
    },
    {
      title: 'ديشاك فضي',
      description: 'أغاني خالدة من عصر السبعينيات والثمانينيات',
      image: {
        src: silverPoster,
        alt: 'Deeshak Silver Image',
      },
      callToAction: {
        text: 'قريباً',
        href: '/genres/silver',
      },
    },
  ],
};
