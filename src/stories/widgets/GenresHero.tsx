import type { Meta, StoryObj } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Story, Stories } from '@storybook/blocks';

import Component from '~/components/widgets/Genres';
import { homeGenres as mockData } from '~/shared/data/pages/home.data';

const meta = {
  title: 'Widgets/Genres',
  component: Component,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls exclude={['id', 'header', 'image', 'isImageDisplayed', 'isBeforeContent', 'isAfterContent']} />
          <Stories includePrimary={false} title={'Stories'} />
        </>
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockData,
  },
};

export const WithBackground: Story = {
  args: {
    ...mockData,
    hasBackground: true,
  },
};

export const OneColumn: Story = {
  args: {
    ...mockData,
    columns: 1,
  },
};

export const TwoColumns: Story = {
  args: {
    ...mockData,
    columns: 2,
  },
};

export const Mobile: Story = {
  args: {
    ...mockData,
  },
  parameters: {
    viewport: {
      defaultViewport: 'SMALL',
    },
  },
};
