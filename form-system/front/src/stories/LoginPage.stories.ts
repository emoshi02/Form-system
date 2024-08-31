import type { Meta, StoryObj } from '@storybook/react';
import { LoginPage } from '../components/LoginPage/Login';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'LoginPage/Login',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withRouter],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginForm: Story = {};
