import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { Question } from '../src/components/CreateForm/CreateFormBody/FormQuestionBlock/Question';

describe('Question.tsx', () => {
  const onChangeMock = jest.fn();
  const onDeleteMock = jest.fn();

  const defaultProps = {
    id: 'e5d80ec7-2b6f-4445-8c32-c2715d671dc6',
    title: 'Test Form',
    questions: ['Question 1'],
    optionType: 'circle',
    image: 'test.png',
    isRequired: false,
    options: ['Option 1'],
    onChange: onChangeMock,
    onDeleteBtnClick: onDeleteMock,
    index: 1,
  };

  beforeEach(() => {
    onChangeMock.mockClear();
    onDeleteMock.mockClear();
  });

  test('Image icon was clicked', async () => {
    const onClickMock = jest.fn();

    const { container } = render(<Question {...defaultProps} />);

    const element = container.querySelector('[data-hook="question-image"]')!;
    element.addEventListener('click', onClickMock);

    fireEvent.click(element);

    expect(onClickMock).toBeCalledTimes(1);
  });

  test('Should remove image when confirmed', async () => {
    const confirmSpy = jest
      .spyOn(window, 'confirm')
      .mockImplementation(() => true);

    const { container } = render(<Question {...defaultProps} />);

    const element = container.querySelector('[data-hook="image-wrapper"]')!;

    fireEvent.click(element);

    expect(confirmSpy).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(defaultProps.id, 'image', null);
    expect(
      container.querySelector('[data-hook="question-image-preview"]')!,
    ).toBeNull();

    confirmSpy.mockRestore();
  });
});
