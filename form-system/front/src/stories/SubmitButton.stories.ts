import type { Meta, StoryObj } from '@storybook/react';
import { SubmitButton } from '../components/SubmitButton/SubmitButton';
import { withRouter } from 'storybook-addon-remix-react-router';
import { within } from '@storybook/test';

const meta = {
  title: 'CreateForm/Submit Button',
  component: SubmitButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter],
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getByText('Submit').onclick = (event) => event.stopPropagation();
  },
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    value: 'Submit',
  },
};
