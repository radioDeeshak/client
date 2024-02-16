import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // Logo
    brandTitle: 'Deeshak',
    brandUrl: 'https://deeshak.com',
    brandTarget: '_blank',
  }),
});
