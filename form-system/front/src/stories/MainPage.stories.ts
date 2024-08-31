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

export const RecentForms: Story = {};

export const ReceivedForms: Story = {
  play: () => {
    (
      document.querySelectorAll(
        '[data-hook="header-nav-item"]',
      )[1] as HTMLAnchorElement
    ).click();
  },
};
