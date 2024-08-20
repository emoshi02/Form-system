import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../components/ToggleSwitch/Toggle';
import { fn } from '@storybook/test';

const meta = {
  title: 'CreateForm/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleSwitchOff: Story = {
  args: {
    label: 'Required',
    isRequired: false,
    setRequired: fn(),
  },
};

export const ToggleSwitchOn: Story = {
  args: {
    label: 'Required',
    isRequired: true,
    setRequired: fn(),
  },
};
