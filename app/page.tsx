import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Genres from '~/components/widgets/Genres';
import Content from '~/components/widgets/Content';
import { homeContentOne, homeContentTwo, homeGenres, homeHero } from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...homeHero} />
      <Genres {...homeGenres} />
      <Content {...homeContentOne} />
      <Content {...homeContentTwo} />
    </>
  );
}
