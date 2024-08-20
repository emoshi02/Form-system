import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header/Header';
import { withRouter } from 'storybook-addon-remix-react-router';
import { within } from '@storybook/test';

const meta = {
  title: 'Header/User Modal',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withRouter],
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getByText('account_circle').click();
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderModalOpen: Story = {};
