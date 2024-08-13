import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { Question } from '../src/components/CreateForm/CreateFormBody/FormQuestionBlock/Question';

describe('Question', () => {
  const onChangeMock = jest.fn();
  const onDeleteMock = jest.fn();

  const defaultProps = {
    id: 121,
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
  });

  test('Image icon was clicked', async () => {
    const onClickMock = jest.fn();

    const component = render(<Question {...defaultProps} />);

    const element =
      component.container.getElementsByClassName('question-image')[0];
    element.addEventListener('click', onClickMock);

    fireEvent.click(element);

    expect(onClickMock).toBeCalledTimes(1);
  });

  test('Should remove image when confirmed', async () => {
    const confirmSpy = jest
      .spyOn(window, 'confirm')
      .mockImplementation(() => true);

    const component = render(<Question {...defaultProps} />);

    const element =
      component.container.getElementsByClassName('image-wrapper')[0];

    fireEvent.click(element);

    expect(confirmSpy).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(
      defaultProps.index,
      'image',
      null,
    );
    expect(
      component.container.getElementsByClassName('question-image-preview')[0],
    ).toBeUndefined();

    confirmSpy.mockRestore();
  });
});
