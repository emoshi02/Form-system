import { Option } from './optionSelect/optionSelect';

export const OPTIONS: Option[] = [
  {
    value: 'radio',
    label: 'Radio Button',
    selectedIcon: 'radio_button_checked',
    optionIcon: 'circle',
    type: 'text',
  },
  {
    value: 'checkbox',
    label: 'Checkbox',
    selectedIcon: 'check_box',
    optionIcon: 'check_box_outline_blank',
    type: 'text',
  },
  {
    value: 'date',
    label: 'Date',
    selectedIcon: 'event',
    optionIcon: 'event',
    type: 'date',
  },
];
