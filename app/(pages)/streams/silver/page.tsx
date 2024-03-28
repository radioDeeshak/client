import { Metadata } from 'next';
import Content from '~/components/widgets/Content';
import { silverContent } from '~/shared/data/pages/content.data';

export const metadata: Metadata = {
  title: 'Silver',
};

const Page = () => {
  return (
    <>
      <Content {...silverContent} />
    </>
  );
};

export default Page;
