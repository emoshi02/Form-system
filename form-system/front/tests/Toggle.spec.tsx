import { describe, expect, test, jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { Toggle } from '../src/components/ToggleSwitch/Toggle';

describe('Toggle switch', () => {
  test('Passed props are initialized correctly', async () => {
    const setRequiredMock = jest.fn();

    const label = 'Test Label';
    const isRequired = false;

    const { container } = render(
      <Toggle
        label={label}
        isRequired={isRequired}
        setRequired={setRequiredMock}
      />,
    );

    expect(container.querySelector('.p-text')?.innerHTML).toBe(label);

    expect(container.getElementsByTagName('input')[0].checked).toBe(false);

    fireEvent.click(container.getElementsByTagName('input')[0]);

    expect(setRequiredMock).toHaveBeenCalledTimes(1);
    expect(setRequiredMock).toHaveBeenCalledWith(true);
  });
});
