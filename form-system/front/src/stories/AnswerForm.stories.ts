import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { AnswerForm } from '../components/AnswerForm/AnswerForm';

const meta = {
  title: 'Answer Form/ Answer Form',
  component: AnswerForm,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AnswerForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Answer: Story = {
  args: {
    formData: {
      id: 11,
      title: 'Test form',
      desc: 'This is a test form',
      user: 'test@gmail.com',
      questions: ['Why testing is important?'],
      optionType: ['check_box_outline_blank'],
      image: [null],
      isRequired: [false],
      options: [['Test is amazing', 'I do not know that']],
    },
  },
};
