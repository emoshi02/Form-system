import { describe, expect, test, jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { Toggle } from '../src/components/ToggleSwitch/Toggle';

describe('Toggle switch', () => {
  test('Passed props are initialized correctly', async () => {
    const label = 'Test Label';
    const isRequired = false;
    const setRequiredMock = jest.fn();

    const component = render(
      <Toggle
        label={label}
        isRequired={isRequired}
        setRequired={setRequiredMock}
      />,
    );

    expect(component.container.querySelector('.p-text')?.innerHTML).toBe(label);

    expect(component.container.getElementsByTagName('input')[0].checked).toBe(
      false,
    );

    fireEvent.click(component.container.getElementsByTagName('input')[0]);

    expect(setRequiredMock).toHaveBeenCalledTimes(1);
    expect(setRequiredMock).toHaveBeenCalledWith(true);
  });

  test('Default isRequired value is false', () => {
    const label = 'Test Label';
    const setRequiredMock = jest.fn();
    const component = render(
      <Toggle label={label} setRequired={setRequiredMock} />,
    );

    expect(component.container.getElementsByTagName('input')[0].checked).toBe(
      false,
    );
  });
});
