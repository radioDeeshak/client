import {
  IconFlame,
  IconPlant,
  IconPyramid,
  IconRectangularPrism,
  IconDeviceAudioTape,
  IconBriefcase,
} from '@tabler/icons-react';

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
      title: 'ديشاك ذهبي',
      description: 'أغنيات خالدة من العصر الذهبي',
      icon: IconRectangularPrism,
      callToAction: {
        text: 'قريباً',
        href: '/genres/gold',
      },
    },
    {
      title: 'ديشاك حقيبة',
      description: 'أغاني خالدة من عصر الأربعينيات الخمسينيات والستينيات',
      icon: IconBriefcase,
      callToAction: {
        text: 'أسمع',
        href: '/genres/haqiba',
      },
    },
    {
      title: 'ديشاك سودان',
      description: 'رحلة ساحرة إلى تراث السودان',
      icon: IconPyramid,
      callToAction: {
        text: 'أسمع',
        href: '/genres/sudani',
      },
    },
    {
      title: 'ديشاك راب',
      description: 'ديشاك راب يجلب لكم أفضل ما في ساحة الراب السودانية.',
      icon: IconFlame,
      callToAction: {
        text: 'قريباً',
        href: '/genres/rap',
      },
    },
    {
      title: 'ديشاك برونزي',
      description: 'أغاني خالدة من عصر التسعينيات',
      icon: IconPlant,
      callToAction: {
        text: 'قريباً',
        href: '/genres/youth',
      },
    },
    {
      title: 'ديشاك فضي',
      description: 'أغاني خالدة من عصر السبعينيات والثمانينيات',
      icon: IconDeviceAudioTape,
      callToAction: {
        text: 'قريباً',
        href: '/genres/eighties',
      },
    },
  ],
};
