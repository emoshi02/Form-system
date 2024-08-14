import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { OptionSelect } from '../src/components/CreateForm/CreateFormBody/FormQuestionBlock/optionSelect/optionSelect';
import { OPTIONS } from '../src/components/CreateForm/CreateFormBody/FormQuestionBlock/constants';

describe('Option select', () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    onChangeMock.mockClear();
  });

  test('Should close on outside click', async () => {
    const { container } = render(
      <OptionSelect
        options={OPTIONS}
        onChange={onChangeMock}
        selectedOption={OPTIONS[0]}
      />,
    );

    fireEvent.click(container.getElementsByClassName('selected-option')[0]);

    fireEvent.mouseDown(document.body);

    expect(
      container.getElementsByClassName('custom-select open')[0],
    ).toBeUndefined();
  });

  test('Should close on option select', async () => {
    const { container } = render(
      <OptionSelect
        options={OPTIONS}
        onChange={onChangeMock}
        selectedOption={OPTIONS[0]}
      />,
    );

    fireEvent.click(container.getElementsByClassName('selected-option')[0]);

    fireEvent.click(container.getElementsByClassName('selected-option')[0]);

    expect(
      container.getElementsByClassName('custom-select open')[0],
    ).toBeUndefined();
  });
});
