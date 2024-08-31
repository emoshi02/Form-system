import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { AnswerForm } from '../components/AnswerForm/AnswerForm';
import picture from './assets/test.png';

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

export const AnswerRadio: Story = {
  args: {
    formData: {
      id: 'e5d80ec7-2b6f-4445-8c32-c2715d671dc6d',
      title: 'Test form',
      desc: 'This is a test form',
      user: 'test@gmail.com',
      questions: ['Why testing is important?'],
      optionType: ['circle'],
      image: [null],
      isRequired: [false],
      options: [['Test is amazing', 'I do not know that']],
    },
  },
};

export const AnswerCheckbox: Story = {
  args: {
    formData: {
      id: 'e5d80ec7-2b6f-4445-8c32-c2715d671dc6d',
      title: 'Test form',
      desc: 'This is a test form',
      user: 'test@gmail.com',
      questions: ['Why testing is important?'],
      optionType: ['check_box_outline_blank'],
      image: [],
      isRequired: [false],
      options: [['Test is amazing', 'I do not know that']],
    },
  },
};

export const AnswerDate: Story = {
  args: {
    formData: {
      id: 'e5d80ec7-2b6f-4445-8c32-c2715d671dc6d',
      title: 'Test form',
      desc: 'This is a test form',
      user: 'test@gmail.com',
      questions: ['When did you start coding?'],
      optionType: ['event'],
      image: [],
      isRequired: [false],
      options: [['']],
    },
  },
};

export const AnswerWithImage: Story = {
  args: {
    formData: {
      id: 'e5d80ec7-2b6f-4445-8c32-c2715d671dc6d',
      title: 'Test form',
      desc: 'This is a test form',
      user: 'test@gmail.com',
      questions: ['Why testing is important?'],
      optionType: ['check_box_outline_blank'],
      image: [picture],
      isRequired: [false],
      options: [['Test is amazing', 'I do not know that']],
    },
  },
};
