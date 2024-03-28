import { Metadata } from 'next';
import Content from '~/components/widgets/Content';
import { sudanContent } from '~/shared/data/pages/content.data';

export const metadata: Metadata = {
  title: 'Sudan',
};

const Page = () => {
  return (
    <>
      <Content {...sudanContent} />
    </>
  );
};

export default Page;
