import { Metadata } from 'next';
import Content from '~/components/widgets/Content';
import { sudaniContent } from '~/shared/data/pages/content.data';

export const metadata: Metadata = {
  title: 'Eighties',
};

const Page = () => {
  return (
    <>
      <Content {...sudaniContent} />
    </>
  );
};

export default Page;
