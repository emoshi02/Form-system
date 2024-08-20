import type { Meta, StoryObj } from '@storybook/react';
import { fn, within } from '@storybook/test';
import { SubHeader } from '../components/SubHeader/SubHeader';

const meta = {
  title: 'CreateForm/Sub Header',
  component: SubHeader,
  parameters: {
    layout: 'fullScreen',
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getByText('Submit').onclick = (event) => event.stopPropagation();
  },
} satisfies Meta<typeof SubHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubHeaderElement: Story = {
  args: {
    sections: ['Recent', 'Received'],
    activeSectionIndex: 0,
    setActiveSectionIndex: fn(),
  },
};
