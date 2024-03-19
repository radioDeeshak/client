import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';
import { HeaderProps, FooterProps } from '../types';

export const headerData: HeaderProps = {
  links: [
    {
      label: 'اتصل بنا',
      href: '/contact',
    },
    {
      label: 'من نحن',
      href: '/about',
    },
    // {
    //   label: 'المعرض',
    //   href: '/gallery',
    // },
    {
      label: 'تيارات',
      href: '/genres',
    },
    {
      label: 'الرئيسية',
      href: '/',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Phone',
      texts: ['Office: 1-810-399-3576'],
    },
    {
      title: 'Email',
      texts: ['Info: info@deeshak.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/radiodeeshak' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://instagram.com/radiodeeshak' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://facebook.com/radiodeeshak' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-zinc-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-orange-600 hover:underline dark:text-gray-200" href="https://amsik.io/">
        {' '}
        Amsik Development Studio
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};
