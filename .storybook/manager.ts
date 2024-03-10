import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // UI
    // appBg: 'white',
    // appContentBg: 'white',
    // appBorderColor: 'white',
    // appBorderRadius: 4,

    // Logo
    brandTitle: 'Deeshak',
    brandUrl: 'https://deeshak.com',
    brandTarget: '_blank',
  }),
});
