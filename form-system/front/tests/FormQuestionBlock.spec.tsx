import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { FormQuestionBlock } from '../src/components/CreateForm/CreateFormBody/FormQuestionBlock/FormQuestionBlock';
import { BrowserRouter } from 'react-router-dom';

describe('Form Question block', () => {
  const onChangeMock = jest.fn();

  const defaultProps = {
    id: 121,
    title: 'Test Form',
    questions: ['Question 1'],
    optionType: ['circle'],
    image: [null],
    isRequired: [false],
    options: [['Option 1']],
    onChange: onChangeMock,
  };

  beforeEach(() => {
    onChangeMock.mockClear();
  });

  test('A new question was added', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <FormQuestionBlock {...defaultProps} />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('add'));

    expect(onChangeMock).toHaveBeenCalledTimes(1);

    const newState = onChangeMock.mock.calls[0][0];
    expect(newState.questions.length).toBe(2);
    expect(newState.optionType.length).toBe(2);
    expect(newState.image.length).toBe(2);
    expect(newState.isRequired.length).toBe(2);
    expect(newState.options.length).toBe(2);
  });

  test('A question was deleted', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <FormQuestionBlock {...defaultProps} />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('delete'));

    expect(onChangeMock).toHaveBeenCalledTimes(1);

    const newState = onChangeMock.mock.calls[0][0];
    expect(newState.questions.length).toBe(0);
  });

  describe('Update form state on field change', () => {
    test('Update question title', async () => {
      const { container } = render(
        <BrowserRouter>
          <FormQuestionBlock {...defaultProps} />
        </BrowserRouter>,
      );

      fireEvent.change(container.getElementsByClassName('question-input')[0], {
        target: { value: 'Updated question title' },
      });

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      const newState = onChangeMock.mock.calls[0][0];
      expect(newState.questions[0]).toBe('Updated question title');
    });

    test('Update option type', async () => {
      const { getAllByText } = render(
        <BrowserRouter>
          <FormQuestionBlock {...defaultProps} />
        </BrowserRouter>,
      );

      fireEvent.click(getAllByText('radio_button_checked')[1]);

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      const newState = onChangeMock.mock.calls[0][0];
      expect(newState.optionType[0]).toBe('circle');
    });
  });

  test('Update question image', async () => {
    URL.createObjectURL = jest.fn(() => 'mocked-image-url');

    const { container } = render(
      <BrowserRouter>
        <FormQuestionBlock {...defaultProps} />
      </BrowserRouter>,
    );

    const file = new File(['test'], 'test-image.png', { type: 'image/png' });

    fireEvent.change(container.getElementsByClassName('image-input')[0], {
      target: { files: [file] },
    });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    const newState = onChangeMock.mock.calls[0][0];
    expect(newState.image[0]).toBe('mocked-image-url');
  });

  test('Update required state', async () => {
    const { container } = render(
      <BrowserRouter>
        <FormQuestionBlock {...defaultProps} />
      </BrowserRouter>,
    );

    fireEvent.click(container.getElementsByClassName('switch')[0]);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    const newState = onChangeMock.mock.calls[0][0];

    expect(newState.isRequired[0]).toBe(true);
  });

  test('Update options', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <FormQuestionBlock {...defaultProps} />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('Add option'));

    const newState = onChangeMock.mock.calls[0][0];
    expect(newState.options[0].length).toBe(2);
  });
});
