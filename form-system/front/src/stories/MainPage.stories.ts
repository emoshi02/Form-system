import type { Meta, StoryObj } from '@storybook/react';
import { MainPage } from '../components/MainPage/MainPage';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'Main Page/Main Page',
  component: MainPage,
  parameters: {
    layout: 'fullScreen',
  },
  decorators: [withRouter],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
