import {
  IconPlant,
  IconPyramid,
  IconRectangularPrism,
  IconDeviceAudioTape,
  IconBriefcase,
  IconFlame,
} from '@tabler/icons-react';
import { ContentProps, GenreProps, HeroProps } from '../../types';

import heroImg from '~/assets/images/hero.jpg';

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
      description: 'الكلاسيكيات الذهبية في الموسيقى السودانية، تسلط الضوء على الأغاني الخالدة والألحان الرائعة',
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

export const homeContentOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Aliquip definiebas ad est',
    subtitle: 'Quando cetero his ne, eum admodum sapientem ut',
    tagline: 'Content',
  },
  content:
    'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
      description:
        'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Cu imperdiet posidonium sed',
      description:
        'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
      description:
        'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
  ],
  image: {
    src: heroImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

export const homeContentTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  image: {
    src: heroImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};
