import type { Metadata } from 'next';

import Contact from '~/components/widgets/Contact';
import Hero from '~/components/widgets/Hero';
import { contactHero, contactContent } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact us',
};

const Page = () => {
  return (
    <>
      <Hero {...contactHero} />
      <Contact {...contactContent} />
    </>
  );
};

export default Page;
