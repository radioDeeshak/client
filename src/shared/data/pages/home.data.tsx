import heroImg from '~/assets/images/gallery/studio4.jpg';
import bronzePoster from '~/assets/images/posters/poster6.jpg';
import goldPoster from '~/assets/images/posters/poster5.jpg';
import haqibaPoster from '~/assets/images/posters/poster4.jpg';
import rapPoster from '~/assets/images/posters/poster3.jpg';
import silverPoster from '~/assets/images/posters/poster2.jpg';
import sudanPoster from '~/assets/images/posters/poster.jpg';

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
import studioPic13 from '~/assets/images/gallery/studio13.jpg';
import studioPic14 from '~/assets/images/gallery/studio14.jpg';
import studioPic15 from '~/assets/images/gallery/studio15.jpg';
import studioPic16 from '~/assets/images/gallery/studio16.jpg';
import studioPic17 from '~/assets/images/gallery/studio17.jpg';
import studioPic18 from '~/assets/images/gallery/studio18.jpg';
import studioPic19 from '~/assets/images/gallery/studio19.jpg';
import studioPic20 from '~/assets/images/gallery/studio20.jpg';
import studioPic21 from '~/assets/images/gallery/studio21.jpg';
import studioPic22 from '~/assets/images/gallery/studio22.jpg';
import studioPic23 from '~/assets/images/gallery/studio23.jpg';
import studioPic24 from '~/assets/images/gallery/studio24.jpg';
import studioPic25 from '~/assets/images/gallery/studio25.jpg';
import studioPic26 from '~/assets/images/gallery/studio26.jpg';
import studioPic27 from '~/assets/images/gallery/studio27.jpg';
import studioPic28 from '~/assets/images/gallery/studio28.jpg';
import studioPic29 from '~/assets/images/gallery/studio29.jpg';
import studioPic30 from '~/assets/images/gallery/studio30.jpg';
import studioPic31 from '~/assets/images/gallery/studio31.jpg';
import studioPic32 from '~/assets/images/gallery/studio32.jpg';
import studioPic33 from '~/assets/images/gallery/studio33.jpg';
import studioPic34 from '~/assets/images/gallery/studio34.jpg';

import { StreamProps, HeroProps, SocialMediaProps } from '../../types';

export const homeStreams: StreamProps = {
  id: 'streams-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        <span className="whitespace-nowrap">أجمل الأغنيات السودانية</span>
      </>
    ),
    subtitle: 'استمتع بأفضل الموسيقى السودانية واستكشف عالم الإيقاعات والألحان الساحرة',
    tagline: 'Streams',
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
        href: '/streams/gold',
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
        href: '/streams/haqiba',
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
        href: '/streams/sudan',
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
        href: '/streams/rap',
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
        href: '/streams/bronze',
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
        href: '/streams/silver',
      },
    },
  ],
};

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
  images: [
    {
      src: studioPic1,
      alt: 'Studio 1',
    },
    {
      src: studioPic2,
      alt: 'Studio 2',
    },
    {
      src: studioPic3,
      alt: 'Studio 3',
    },
    {
      src: studioPic4,
      alt: 'Studio 4',
    },
    {
      src: studioPic5,
      alt: 'Studio 5',
    },
    {
      src: studioPic6,
      alt: 'Studio 6',
    },
    {
      src: studioPic7,
      alt: 'Studio 7',
    },
    {
      src: studioPic8,
      alt: 'Studio 8',
    },
    {
      src: studioPic9,
      alt: 'Studio 9',
    },
    {
      src: studioPic10,
      alt: 'Studio 10',
    },
    {
      src: studioPic11,
      alt: 'Studio 11',
    },
    {
      src: studioPic12,
      alt: 'Studio 12',
    },
    {
      src: studioPic13,
      alt: 'Studio 13',
    },
    {
      src: studioPic14,
      alt: 'Studio 14',
    },
    {
      src: studioPic15,
      alt: 'Studio 15',
    },
    {
      src: studioPic16,
      alt: 'Studio 16',
    },
    {
      src: studioPic17,
      alt: 'Studio 17',
    },
    {
      src: studioPic18,
      alt: 'Studio 18',
    },
    {
      src: studioPic19,
      alt: 'Studio 19',
    },
    {
      src: studioPic20,
      alt: 'Studio 20',
    },
    {
      src: studioPic21,
      alt: 'Studio 21',
    },
    {
      src: studioPic22,
      alt: 'Studio 22',
    },
    {
      src: studioPic23,
      alt: 'Studio 23',
    },
    {
      src: studioPic24,
      alt: 'Studio 24',
    },
    {
      src: studioPic25,
      alt: 'Studio 25',
    },
    {
      src: studioPic26,
      alt: 'Studio 26',
    },
    {
      src: studioPic27,
      alt: 'Studio 27',
    },
    {
      src: studioPic28,
      alt: 'Studio 28',
    },
    {
      src: studioPic29,
      alt: 'Studio 29',
    },
    {
      src: studioPic30,
      alt: 'Studio 30',
    },
    {
      src: studioPic31,
      alt: 'Studio 31',
    },
    {
      src: studioPic32,
      alt: 'Studio 32',
    },
    {
      src: studioPic33,
      alt: 'Studio 33',
    },
    {
      src: studioPic34,
      alt: 'Studio 34',
    },
  ],
};

export const homeAbout: HeroProps = {
  id: 'about-on-home',
  hasBackground: true,
  tagline: 'راديو ديشاك',
  subtitle:
    'راديو ديشاك هو الراديو السوداني الأول على الانترنت، هو مشروع غير ربحي ومفتوح المصدر يعني بالمهاجر والمغترب السوداني في جميع أنحاء العالم. أغاني وموسيقى سودانية وإقليمية على مدار الساعة طوال أيام الأسبوع.',
  title: 'الصورة ممكن تتسمع والصوت بيتشاف بالعيون',
  image: {
    src: heroImg,
    alt: 'Studio 4',
  },
  callToAction: {
    text: 'اكتشف المزيد',
    href: '/about',
  },
};

export const homeSocialMedia: SocialMediaProps = {
  id: 'social-media-on-home',
  header: {
    title: 'تواصل معنا',
    subtitle: 'تابعنا على وسائل التواصل الاجتماعي',
    tagline: 'Social Media',
  },
  items: [
    {
      embedUrl:
        'https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/photo?fbid=781327554001302&set=a.518735240260536&show_text=true',
      callToAction: {
        text: 'أعجبني',
        href: 'https://www.facebook.com/deeshakradio',
      },
    },

    {
      embedUrl: 'https://www.instagram.com/p/Csy1x6bubuH/embed/captioned/',
      callToAction: {
        text: 'تابعنا',
        href: 'https://www.instagram.com/radio_deeshak',
      },
    },

    {
      embedUrl:
        'https://platform.twitter.com/embed/Tweet.html?dnt=true&embedId=twitter-widget-0&frame=false&hideCard=false&hideThread=false&id=1460313303985664000&lang=en&origin=https%3A%2F%2Ftwitter.com%2Fradio_deeshak%2Fstatus%2F1460313303985664000&theme=light&widgetsVersion=ed20a2b%3A1601588405575',
      callToAction: {
        text: 'تابعنا',
        href: 'https://twitter.com/radio_deeshak',
      },
    },

    {
      embedUrl: 'https://www.tiktok.com/embed/v2/7035458843366657286',
      callToAction: {
        text: 'تابعنا',
        href: 'https://www.tiktok.com/@radio_deeshak',
      },
    },

    {
      embedUrl: 'https://www.youtube.com/embed/POAWpq1qEeI',
      callToAction: {
        text: 'اشترك',
        href: 'https://www.youtube.com/channel/radio_deeshak',
      },
    },
    {
      embedUrl: 'https://soundcloud.com/radio_deeshak',
      callToAction: {
        text: 'استمع',
        href: 'https://soundcloud.com/radio_deeshak',
      },
    },
  ],
};
