import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandWhatsapp } from '@tabler/icons-react';
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
    {
      label: 'المعرض',
      href: '/gallery',
    },
    {
      label: 'الإذاعات',
      href: '/streams',
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
      label: `All Rights Reserved © ${new Date().getFullYear()} · Radio Deeshak`,
    },
  ],
  columns: [
    {
      title: 'Phone',
      texts: ['Office: +1-810-399-3576'],
    },
    {
      title: 'Email',
      texts: ['Info: contact@deeshak.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/radio_deeshak' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://instagram.com/radio_deeshak' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://facebook.com/radio_deeshak' },
    { label: 'Whatsapp', icon: IconBrandWhatsapp, href: 'https://wa.me/+18103993576' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-zinc-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span className="text-xs">
        Powered by{' '}
        <a className="text-orange-600 hover:underline dark:text-gray-200" href="https://github.com/radioDeeshak/client">
          {' '}
          Amsik Development Studio
        </a>
      </span>
    </div>
  ),
};
