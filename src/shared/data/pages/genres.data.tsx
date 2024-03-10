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
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Our Genres',
    subtitle:
      'نهدف لتقديم محتوى متنوع ومتعدد الأصوات يعكس تنوع وتعدد الثقافات والمجتمعات السودانية في الداخل والخارج. يعتمد الراديو على مشاركة المستمعين في تقديم المحتوى والبرامج والمواضيع التي يهتمون بها ويودون تقديمها',
    tagline: 'culture',
  },
  items: [
    {
      title: 'ديشاك حقيبة',
      description: 'محتوى متنوع ومتعدد الأصوات يعكس تنوع وتعدد الثقافات والمجتمعات السودانية في الداخل والخارج.',
      icon: IconBriefcase,
    },
    {
      title: 'ديشاك ذهبي',
      description: 'الكلاسيكيات الذهبية في الموسيقى السودانية، تسلط الضوء على الأغاني الخالدة والألحان ',
      icon: IconRectangularPrism,
    },
    {
      title: 'ديشاك سوداني',
      description: 'رحلة ساحرة إلى تراث السودان، حيث يتألق الإيقاع التقليدي بألوانه الغنية وأصواته العذبة',
      icon: IconPyramid,
    },
    {
      title: 'ديشاك راب',
      description: 'ديشاك راب يجلب لكم أفضل ما في ساحة الراب السودانية.',
      icon: IconFlame,
    },
    {
      title: 'ديشاك شباب',
      description: 'تناغم الأصوات الحديثة والإيقاعات النابضة بالحياة، تحفل هذه الموسيقى بالشغف والطاقة الشبابية.',
      icon: IconPlant,
    },
    {
      title: 'ديشاك ثمانينات',
      description: 'لحظات ملهمة من عصر الثمانينيات، حيث يعزف الإيقاع بألحانه المثيرة وطاقته المتفجرة',
      icon: IconDeviceAudioTape,
    },
  ],
};
