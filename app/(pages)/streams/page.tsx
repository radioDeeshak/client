import { Metadata } from 'next';
import StreamsContent from '~/components/widgets/Streams';
import { streamsContent } from '~/shared/data/pages/streams.data';

export const metadata: Metadata = {
  title: 'Streams',
};

const Page = () => {
  return (
    <>
      <StreamsContent {...streamsContent} />
    </>
  );
};

export default Page;
