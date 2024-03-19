import { Metadata } from 'next';
import Content from '~/components/widgets/Content';
import { goldContent } from '~/shared/data/pages/content.data';

export const metadata: Metadata = {
  title: 'Gold',
};

const Page = () => {
  return (
    <>
      <Content {...goldContent} />
    </>
  );
};

export default Page;
