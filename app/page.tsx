import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Streams from '~/components/widgets/Streams';
import About from '~/components/widgets/About';
import { homeStreams, homeHero, homeAbout, homeSocialMedia } from '~/shared/data/pages/home.data';
import SocialMedia from '~/components/widgets/SocialMedia';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Streams {...homeStreams} />
      <Hero {...homeHero} />
      <About {...homeAbout} />
      <SocialMedia {...homeSocialMedia} />
    </>
  );
}
