import { Metadata } from 'next';
import Content from '~/components/widgets/Content';
import { eightiesContent } from '~/shared/data/pages/content.data';

export const metadata: Metadata = {
  title: 'Eighties',
};

const Page = () => {
  return (
    <>
      <Content {...eightiesContent} />
    </>
  );
};

export default Page;
