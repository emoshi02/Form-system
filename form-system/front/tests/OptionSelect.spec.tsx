import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { OptionSelect } from '../src/components/CreateForm/CreateFormBody/FormQuestionBlock/optionSelect/optionSelect';
import { OPTIONS } from '../src/components/CreateForm/CreateFormBody/FormQuestionBlock/constants';

describe('OptionSelect.tsx', () => {
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

    fireEvent.click(container.querySelector('[data-hook="selected-option"]')!);

    fireEvent.mouseDown(document.body);

    expect(
      container.querySelector('[data-hook="custom-select open"]'),
    ).toBeNull();
  });

  test('Should close on option select', async () => {
    const { container } = render(
      <OptionSelect
        options={OPTIONS}
        onChange={onChangeMock}
        selectedOption={OPTIONS[0]}
      />,
    );

    fireEvent.click(container.querySelector('[data-hook="selected-option"]')!);

    fireEvent.click(container.querySelector('[data-hook="selected-option"]')!);

    expect(
      container.querySelector('[data-hook="custom-select open"]'),
    ).toBeNull();
  });
});
