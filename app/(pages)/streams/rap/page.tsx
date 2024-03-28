import { Metadata } from 'next';
import Content from '~/components/widgets/Content';
import { rapContent } from '~/shared/data/pages/content.data';

export const metadata: Metadata = {
  title: 'Rap',
};

const Page = () => {
  return (
    <>
      <Content {...rapContent} />
    </>
  );
};

export default Page;
