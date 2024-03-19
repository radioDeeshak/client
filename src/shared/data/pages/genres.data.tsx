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
      description: 'الكلاسيكيات الذهبية في الموسيقى السودانية، تسلط الضوء على الأغاني الخالدة والألحان ',
      icon: IconRectangularPrism,
      callToAction: {
        text: 'Discover now',
        href: '/genres/gold',
      },
    },
    {
      title: 'ديشاك حقيبة',
      description: 'موسيقى الحقيبة تأخذك في رحلة موسيقية متنوعة ومتجددة، تتنوع بين الأصوات والألحان',
      icon: IconBriefcase,
      callToAction: {
        text: 'Discover now',
        href: '/genres/haqiba',
      },
    },
    {
      title: 'ديشاك سودان',
      description: 'رحلة ساحرة إلى تراث السودان، حيث يتألق الإيقاع التقليدي بألوانه الغنية وأصواته العذبة',
      icon: IconPyramid,
      callToAction: {
        text: 'Discover now',
        href: '/genres/sudani',
      },
    },
    {
      title: 'ديشاك راب',
      description: 'ديشاك راب يجلب لكم أفضل ما في ساحة الراب السودانية.',
      icon: IconFlame,
      callToAction: {
        text: 'Discover now',
        href: '/genres/rap',
      },
    },
    {
      title: 'ديشاك شباب',
      description: 'تناغم الأصوات الحديثة والإيقاعات النابضة بالحياة، تحفل هذه الموسيقى بالشغف والطاقة الشبابية.',
      icon: IconPlant,
      callToAction: {
        text: 'Discover now',
        href: '/genres/youth',
      },
    },
    {
      title: 'ديشاك ثمانينات',
      description: 'لحظات ملهمة من عصر الثمانينيات، حيث يعزف الإيقاع بألحانه المثيرة وطاقته المتفجرة',
      icon: IconDeviceAudioTape,
      callToAction: {
        text: 'Discover now',
        href: '/genres/eighties',
      },
    },
  ],
};
