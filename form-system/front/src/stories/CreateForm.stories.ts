import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { CreateForm } from '../components/CreateForm/CreateFormBody/CreateForm';
import picture from './assets/test.png';

const meta = {
  title: 'CreateForm/Form',
  component: CreateForm,
  decorators: [withRouter],
} satisfies Meta<typeof CreateForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    formData: null,
  },
};

export const Update: Story = {
  args: {
    formData: {
      id: '11',
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

export const QuestionWithImage: Story = {
  args: {
    formData: {
      id: '111',
      title: 'Question with Image Form',
      desc: 'This is a test form',
      user: 'test@gmail.com',
      questions: ['Select all image descriptions that you like.'],
      optionType: ['circle'],
      image: [picture],
      isRequired: [false],
      options: [['Summer festival', 'Good vibes']],
    },
  },
};

export const RequiredQuestion: Story = {
  args: {
    formData: {
      id: '1111',
      title: 'Required Question Form',
      desc: 'This is a test form',
      user: 'test@gmail.com',
      questions: ['Why testing is important?'],
      optionType: ['circle'],
      image: [null],
      isRequired: [true],
      options: [['Test is amazing', 'I do not know that']],
    },
  },
};

export const RadioOptionQuestion: Story = {
  args: {
    formData: {
      id: '11111',
      title: 'Radio Question Form',
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

export const CheckboxOptionQuestion: Story = {
  args: {
    formData: {
      id: '11111',
      title: 'Checkbox Question Form',
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

export const DateOptionQuestion: Story = {
  args: {
    formData: {
      id: '11111',
      title: 'Birthday Form',
      desc: 'This is a test form',
      user: 'test@gmail.com',
      questions: ['When is your birthday?'],
      optionType: ['event'],
      image: [null],
      isRequired: [false],
      options: [['']],
    },
  },
};

export const OptionSelectOpen: Story = {
  args: {
    formData: null,
  },
  play: () => {
    (
      document.querySelector('[data-hook="selected-option"]') as HTMLDivElement
    ).click();
  },
};
