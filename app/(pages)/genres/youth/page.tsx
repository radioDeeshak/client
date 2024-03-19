import { Metadata } from 'next';
import Content from '~/components/widgets/Content';
import { youthContent } from '~/shared/data/pages/content.data';

export const metadata: Metadata = {
  title: 'Youth',
};

const Page = () => {
  return (
    <>
      <Content {...youthContent} />
    </>
  );
};

export default Page;
