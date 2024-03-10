import { Metadata } from 'next';
import GenresContent from '~/components/widgets/Genres';
import { genresHero, genresContent } from '~/shared/data/pages/genres.data';

export const metadata: Metadata = {
  title: 'Genres',
};

const Page = () => {
  return (
    <>
      <GenresContent {...genresContent} />
    </>
  );
};

export default Page;
