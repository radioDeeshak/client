import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons-react';
import { HeaderProps, FooterProps } from '../types';


export const headerData: HeaderProps = {
  links: [
    {
      label: 'Genres',
      href: '/genres',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'GitHub',
      href: 'https://github.com/radioDeeshak/client',
      targetBlank: true,
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
      title: 'Address',
      texts: ['51 Phasellus Avenue Maecenas', 'Aliquam, AQ 52098'],
    },
    {
      title: 'Phone',
      texts: ['Reception: +105 123 4567', 'Office: +107 235 7890'],
    },
    {
      title: 'Email',
      texts: ['Office: info@example.com', 'Site: https://example.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/deeshak' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://instagram.com/deeshak' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://facebook.com/deeshak' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
    <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://amsik.io/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
    Made by{' '}
    <a className="text-orange-600 hover:underline dark:text-gray-200" href="https://amsik.io/">
      {' '}
      Amsik Development Studio
    </a>{' '}
    · All rights reserved.
  </div>
  ),
};

