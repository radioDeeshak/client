import type { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/blocks';

import Component from '~/components/widgets/Gallery';

const meta: Meta = {
  title: 'Widgets/Gallery',
  component: Component,
  parameters: {
    docs: {
    },
    },
    argTypes: {},
    };
    
    export default meta;
    type Story = StoryObj<typeof meta>;
    export const Base: Story = {
    args: {
    },
    };

    export const WithBackground: Story = {
    args: {
    hasBackground: true,
    },
    };

    export const OneColumn: Story = {
    args: {
    columns: 1,
    },
    };


    
