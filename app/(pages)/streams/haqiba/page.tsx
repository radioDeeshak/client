import { Metadata } from 'next';
import Content from '~/components/widgets/Content';
import { haqibaContent } from '~/shared/data/pages/content.data';

export const metadata: Metadata = {
  title: 'Haqiba',
};

const Page = () => {
  return (
    <>
      <Content {...haqibaContent} />
    </>
  );
};

export default Page;
