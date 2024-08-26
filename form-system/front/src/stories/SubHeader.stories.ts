import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SubHeader } from '../components/SubHeader/SubHeader';

const meta = {
  title: 'CreateForm/Sub Header',
  component: SubHeader,
  parameters: {
    layout: 'fullScreen',
  },
} satisfies Meta<typeof SubHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubHeaderActiveFirstElement: Story = {
  args: {
    sections: ['Recent', 'Received'],
    activeSectionIndex: 0,
    setActiveSectionIndex: fn(),
  },
};

export const SubHeaderActiveSecondElement: Story = {
  args: {
    sections: ['Recent', 'Received'],
    activeSectionIndex: 1,
    setActiveSectionIndex: fn(),
  },
};
