import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { AnswerFormQuestions } from '../src/components/AnswerForm/AnswerFormBody/AnswerFormQuestions/AnswerFormQuestions';

describe('AnswerFormQuestions.tsx', () => {
  test('Checkbox should select multiple choices', async () => {
    const onChangeMock = jest.fn();

    const defaultProps = {
      title: 'What are your favorite colors?',
      optionType: 'check_box_outline_blank',
      image: null,
      isRequired: false,
      options: ['Red', 'Green', 'Blue'],
      onChange: onChangeMock,
    };

    const { getByLabelText } = render(
      <AnswerFormQuestions {...defaultProps} />,
    );

    fireEvent.click(getByLabelText('Red'));

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['Red']);

    fireEvent.click(getByLabelText('Blue'));

    expect(onChangeMock).toHaveBeenCalledTimes(2);

    expect(onChangeMock).toHaveBeenCalledWith(['Red', 'Blue']);
  });

  test('Option setting should initially be OPTIONS[0] element', async () => {
    const onChangeMock = jest.fn();

    const defaultProps = {
      title: 'What are your favorite colors?',
      optionType: 'test',
      image: null,
      isRequired: false,
      options: ['Red', 'Green', 'Blue'],
      onChange: onChangeMock,
    };

    const { container } = render(<AnswerFormQuestions {...defaultProps} />);

    expect(
      container.getElementsByClassName('answer-input-type radio')[0],
    ).toBeDefined();
  });

  test('Clicking on a checked checkbox should uncheck it', async () => {
    const onChangeMock = jest.fn();

    const defaultProps = {
      title: 'What are your favorite colors?',
      optionType: 'check_box_outline_blank',
      image: null,
      isRequired: false,
      options: ['Red', 'Green', 'Blue'],
      onChange: onChangeMock,
    };

    const { getByLabelText } = render(
      <AnswerFormQuestions {...defaultProps} />,
    );

    fireEvent.click(getByLabelText('Red'));

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['Red']);

    fireEvent.click(getByLabelText('Red'));

    expect(onChangeMock).toHaveBeenCalledTimes(2);

    expect(onChangeMock).toHaveBeenCalledWith([]);
  });

  test('Date should change correctly', async () => {
    const onChangeMock = jest.fn();

    const defaultProps = {
      title: 'When were you born?',
      optionType: 'event',
      image: null,
      isRequired: false,
      options: [''],
      onChange: onChangeMock,
    };

    const { container } = render(<AnswerFormQuestions {...defaultProps} />);

    const element = container.getElementsByClassName(
      'answer-input-type date',
    )[0];

    fireEvent.change(element, { target: { value: '2002-07-05' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('2002-07-05');

    fireEvent.change(element, { target: { value: '2002-06-08' } });
    expect(onChangeMock).toHaveBeenCalledTimes(2);
    expect(onChangeMock).toHaveBeenCalledWith('2002-06-08');
  });

  test('Image should render correctly', async () => {
    const onChangeMock = jest.fn();

    const defaultProps = {
      title: 'When were you born?',
      optionType: 'event',
      image: 'test.png',
      isRequired: false,
      options: [''],
      onChange: onChangeMock,
    };

    const { container } = render(<AnswerFormQuestions {...defaultProps} />);

    expect(
      container
        .getElementsByClassName('answer-form-image')[0]
        .getAttribute('src'),
    ).toBe('test.png');
  });
});
