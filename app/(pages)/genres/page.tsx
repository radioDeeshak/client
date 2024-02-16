import { Metadata } from 'next';
import FAQs from '~/components/widgets/FAQs';
import Hero from '~/components/widgets/Hero';
import Play from '~/components/widgets/Play';
import {
  genresFaqs,
  genresHero,
} from '~/shared/data/pages/genres.data';

export const metadata: Metadata = {
  title: 'Genres',
};

const Page = () => {
  return (
    <>
      <Hero {...genresHero} />
      <FAQs {...genresFaqs} />
      <Play />
    </>
  );
};

export default Page;
