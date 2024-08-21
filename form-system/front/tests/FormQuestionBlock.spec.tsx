import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { FormQuestionBlock } from '../src/components/CreateForm/CreateFormBody/FormQuestionBlock/FormQuestionBlock';
import { BrowserRouter } from 'react-router-dom';

describe('FormQuestionBlock.tsx', () => {
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

  test('Adding a new question should call onChange with new question', async () => {
    const { container, getByText } = render(
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
    expect(
      container.getElementsByClassName('question-input')[1].innerHTML,
    ).toBe('');
  });

  test('Deleting a question should call onChange with remaining questions', async () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <FormQuestionBlock {...defaultProps} />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('delete'));

    expect(onChangeMock).toHaveBeenCalledTimes(1);

    const newState = onChangeMock.mock.calls[0][0];
    expect(newState.questions.length).toBe(0);
    expect(
      container.getElementsByClassName('question-input')[1],
    ).toBeUndefined();
  });

  describe('Updates form state on field change', () => {
    test('Updating a question title should call onChange with new title', async () => {
      const { container } = render(
        <BrowserRouter>
          <FormQuestionBlock {...defaultProps} />
        </BrowserRouter>,
      );

      const element = container.getElementsByClassName('question-input')[0];

      fireEvent.change(element, {
        target: { value: 'Updated question title' },
      });

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      const newState = onChangeMock.mock.calls[0][0];
      expect(newState.questions[0]).toBe('Updated question title');
      expect(element.innerHTML).toBe('Updated question title');
    });

    test('Updating an option type should call onChange with updated option type', async () => {
      const { getAllByText } = render(
        <BrowserRouter>
          <FormQuestionBlock {...defaultProps} />
        </BrowserRouter>,
      );

      const element = getAllByText('radio_button_checked')[1];

      fireEvent.click(element);

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      const newState = onChangeMock.mock.calls[0][0];
      expect(newState.optionType[0]).toBe('circle');
      expect(getAllByText('circle')[0]).toBeDefined();
    });
  });

  test('Updating a question image should call onChange with updated image', async () => {
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
    expect(
      container
        .getElementsByClassName('question-image-preview')[0]
        .getAttribute('src'),
    ).toBe('mocked-image-url');
  });

  test('Updating required state should call onChange with new state', async () => {
    const { container } = render(
      <BrowserRouter>
        <FormQuestionBlock {...defaultProps} />
      </BrowserRouter>,
    );

    fireEvent.click(container.getElementsByClassName('switch')[0]);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    const newState = onChangeMock.mock.calls[0][0];

    expect(newState.isRequired[0]).toBe(true);
    expect(
      (
        container.getElementsByClassName(
          'required-toggle-input',
        )[0] as HTMLInputElement
      ).checked,
    ).toBe(true);
  });

  test('Updating options should call onChange with updated options', async () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <FormQuestionBlock {...defaultProps} />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('Add option'));

    const newState = onChangeMock.mock.calls[0][0];
    expect(newState.options[0].length).toBe(2);
    expect(container.getElementsByClassName('add-option')[1].innerHTML).toBe(
      '',
    );
  });
});
