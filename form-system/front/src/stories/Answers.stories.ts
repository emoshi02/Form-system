import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { Answers } from '../components/CreateForm/Answers/Answers';

const meta = {
  title: 'CreateForm/Answers',
  component: Answers,
  decorators: [withRouter],
} satisfies Meta<typeof Answers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnswersDisplay: Story = {};
