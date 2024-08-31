import type { Preview } from '@storybook/react';
import '../public/assets/styles/reset.css';
import '../public/assets/styles/vars.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
