import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { Option } from '../src/components/CreateForm/CreateFormBody/FormQuestionBlock/OptionBlock/Option';

describe('Option', () => {
  const onChangeMock = jest.fn();

  test('Should handle option input change', () => {
    const defaultProps = {
      optionIcon: 'circle',
      type: 'text' as 'text' | 'date',
      onChange: onChangeMock,
      options: ['Option 1', 'Option 2'],
    };

    const component = render(<Option {...defaultProps} />);

    fireEvent.change(
      component.container.getElementsByClassName('add-option')[0],
      {
        target: { value: 'Updated option text' },
      },
    );

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    const newState = onChangeMock.mock.calls[0][0];

    expect(newState[0]).toBe('Updated option text');
  });

  test('Should handle delete button click', async () => {
    const defaultProps = {
      optionIcon: 'circle',
      type: 'text' as 'text' | 'date',
      onChange: onChangeMock,
      options: ['Option 1', 'Option 2'],
    };

    const component = render(<Option {...defaultProps} />);

    const element = component.container.getElementsByClassName('close')[0];
    fireEvent.click(element);

    expect(onChangeMock).toHaveBeenCalledTimes(2);

    const newState = onChangeMock.mock.calls[1][0];
    expect(newState.length).toBe(1);
    expect(newState).toEqual(['Option 2']);
  });

  test('Should render one option when option type is Date', async () => {
    const defaultProps = {
      optionIcon: 'event',
      type: 'date' as 'text' | 'date',
      onChange: onChangeMock,
      options: ['2024.08.12'],
    };

    const component = render(<Option {...defaultProps} />);

    expect(
      component.container.getElementsByClassName('option-block').length,
    ).toBe(1);
    expect(
      component.container.getElementsByClassName('add-option-btn').length,
    ).toBe(0);
  });

  test('When option type is changed to date there should be only one option block and other option blocks are cleared ', async () => {
    const defaultProps = {
      optionIcon: 'circle',
      type: 'date' as 'text' | 'date',
      onChange: onChangeMock,
      options: ['Option 1', 'Option 2'],
    };

    const component = render(<Option {...defaultProps} />);
    expect(
      component.container.getElementsByClassName('option-block').length,
    ).toBe(1);
    expect(
      component.container.getElementsByClassName('add-option-btn').length,
    ).toBe(0);
  });
});
