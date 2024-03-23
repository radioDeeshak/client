import { Metadata } from 'next';
import Content from '~/components/widgets/Content';
import { bronzeContent } from '~/shared/data/pages/content.data';

export const metadata: Metadata = {
  title: 'Bronze',
};

const Page = () => {
  return (
    <>
      <Content {...bronzeContent} />
    </>
  );
};

export default Page;
