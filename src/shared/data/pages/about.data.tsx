import { StreamProps, HeroProps, StepsProps } from '~/shared/types';
import hero2Img from '~/assets/images/hero2.jpg';
import { IconAward, IconNumber1, IconNumber2, IconNumber3, IconNumber4, IconNumber5 } from '@tabler/icons-react';

export const aboutHero: HeroProps = {
  title: 'About Us',
  subtitle:
    'راديو ديشاك هو الراديو السوداني الأول على الانترنت، هو مشروع غير ربحي ومفتوح المصدر يعني بالمهاجر والمغترب السوداني في جميع أنحاء العالم. أغاني وموسيقى سودانية وإقليمية على مدار الساعة طوال أيام الأسبوع.',
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Hero Image',
  },
};

export const mission: StreamProps = {
  id: 'streams-four-on-about',
  hasBackground: false,
  header: {
    title: 'Our mission',
    subtitle:
      'نحن في راديو ديشاك نسعى إلى تقديم محتوى إذاعي متميز ومتنوع يعكس تنوع الثقافات والمواهب، مع التركيز على الجودة والابتكار، وتعزيز قيم المساواة والتنوع في الصناعة، وذلك لخلق تجربة إذاعية استثنائية لمستمعينا في كل مكان.',
    tagline: 'Mission and Vision',
  },
};

export const vision: StreamProps = {
  id: 'streams-four-on-about-two',
  hasBackground: false,
  header: {
    title: 'Our vision',
    subtitle:
      'لدينا رؤية للتوسع في المستقبل إلى مجالات الرياضة والأفلام والمسرح والبودكاست والتكنولوجيا. مشاريعنا المستقبلية تهدف أيضًا إلى دعم التعليم والموسيقى وبرامج الأطفال، مع التركيز بشكل خاص على الإذاعة السودانية والموسيقى',
  },
  isAfterContent: true,
  columns: 2,
};

export const steps: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: false,
  header: {
    title: 'History of Radio Deeshak!',
    subtitle:
      'تأسست راديو ديشاك عام ٢٠١٠ كواحدة من أبرز محطات الراديو على الويب. بدأت رحلتها كفكرة بسيطة وتحولت إلى واحدة من أكثر المحطات شهرة وتأثيراً في عالم البث الإذاعي عبر الإنترنت.',
    tagline: 'Company History',
  },
  items: [
    {
      title: 'Our foundation',
      description:
        'تأسست راديو ديشاك على أسس راسخة من التميز والتجربة، حيث تسعى لتقديم محتوى إذاعي مميز يلبي تطلعات المستمعين ويثري حياتهم.',
      icon: IconNumber1,
    },
    {
      title: 'The early years',
      description:
        'بدأت راديو ديشاك رحلتها الإذاعية بخطى ثابتة وثقة، حيث استطاعت خلال السنوات الأولى تحقيق نجاحات ملحوظة وكسب ثقة جمهورها المتزايد.',
      icon: IconNumber2,
    },
    {
      title: 'Growth',
      description:
        'شهدت راديو ديشاك نمواً ملحوظاً على مر السنين، حيث ازدادت قاعدة مستمعيها وتوسعت نطاق تأثيرها وتواجدها على الساحة الإذاعية العالمية.',
      icon: IconNumber3,
    },
    {
      title: 'Expanding horizons',
      description:
        'تطورت راديو ديشاك لتصبح واحدة من أكبر المحطات الإذاعية على الويب، وتوسعت في تقديم محتوى إذاعي متنوع ومميز يلبي تطلعات مستمعيها.',
      icon: IconNumber4,
    },
    {
      title: 'Our ongoing commitment',
      description:
        'تلتزم راديو ديشاك بتقديم تجربة إذاعية مميزة ومتنوعة لمستمعيها، وتواصل تطوير وتحسين محتواها الإذاعي لتلبية تطلعات جمهورها المتزايد.',
      icon: IconNumber5,
    },
  ],
};

export const record: StreamProps = {
  id: 'streams-on-about',
  hasBackground: true,
  header: {
    title: 'Our record of excellence',
    subtitle:
      'Etiam lobortis elementum ornare. Vestibulum lacinia magna ut eleifend facilisis. Cras ac mi nec diam auctor dictum.',
    tagline: 'Achievements',
  },
  columns: 1,
  items: [
    {
      title: 'Global recognition',
      description:
        'Nullam porttitor lacus elit, sed pellentesque eros aliquam eget. Phasellus interdum placerat enim sed vehicula. Ut tincidunt, magna in iaculis maximus, lectus ante dignissim neque, imperdiet sodales enim augue a quam.',
      icon: IconAward,
    },
    {
      title: 'Innovator of the year award',
      description:
        'Cras mollis elit massa, vel interdum libero molestie a. Nulla facilisi. Suspendisse cursus non sapien ut tincidunt. Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      icon: IconAward,
    },
    {
      title: 'Sustainability award',
      description:
        'Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent in tempor orci. Vestibulum velit justo, dignissim quis nisl nec, scelerisque ultrices mi sapien diam quis elit.',
      icon: IconAward,
    },
  ],
};
