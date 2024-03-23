import type { Metadata } from 'next';

import Gallery from '~/components/widgets/Gallery';
import { galleryContent } from '~/shared/data/pages/gallery.data';

export const metadata: Metadata = {
  title: 'Gallery',
};

const Page = () => {
  return (
    <>
      <Gallery {...galleryContent} />
    </>
  );
};

export default Page;
