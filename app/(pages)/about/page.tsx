import type { Metadata } from 'next';

import Record from '~/components/widgets/Genres';
import Culture from '~/components/widgets/Culture';
import MissionAndValues from '~/components/widgets/MissionAndValues';
import AboutHero from '~/components/widgets/About';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import Play from '~/components/widgets/Play';
import {
  mission,
  values,
  culture,
  hero2About,
  statsAbout,
  steps,
  record,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <AboutHero {...hero2About} />
      <Stats {...statsAbout} />
      <MissionAndValues {...mission} />
      <MissionAndValues {...values} />
      <Steps {...steps} />
      <Culture {...culture} />
      <Record {...record} />
      <Play />
    </>
  );
};

export default Page;
