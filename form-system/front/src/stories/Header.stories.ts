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
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserModalClosed: Story = {};

export const UserModalOpen: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getByText('account_circle').click();
  },
};
