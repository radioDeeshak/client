import type { Metadata } from 'next';

import MissionAndVision from '~/components/widgets/MissionAndVision';
import About from '~/components/widgets/About';
import Steps from '~/components/widgets/Steps';
import { mission, vision, aboutHero, steps } from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <About {...aboutHero} />
      <MissionAndVision {...mission} />
      <MissionAndVision {...vision} />
      <Steps {...steps} />
    </>
  );
};

export default Page;
