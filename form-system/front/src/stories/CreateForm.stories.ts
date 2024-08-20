import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { CreateForm } from '../components/CreateForm/CreateFormBody/CreateForm';

const meta = {
  title: 'CreateForm/Form States',
  component: CreateForm,
  decorators: [withRouter],
} satisfies Meta<typeof CreateForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyState: Story = {
  args: {
    formData: null,
  },
};

export const UpdateState: Story = {
  args: {
    formData: {
      id: 11,
      title: 'Test form',
      desc: 'This is a test form',
      user: 'test@gmail.com',
      questions: ['Why testing is important?'],
      optionType: ['checkbox'],
      image: [null],
      isRequired: [false],
      options: [['Test is amazing', 'I do not know that']],
    },
  },
};
