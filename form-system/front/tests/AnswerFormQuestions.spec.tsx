import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { AnswerFormQuestions } from '../src/components/AnswerForm/AnswerFormBody/AnswerFormQuestions/AnswerFormQuestions';

describe('Answer form questions', () => {
  test('Checkbox should select multiple choices', async () => {
    const onChangeMock = jest.fn();

    const defaultProps = {
      title: 'What are your favorite colors?',
      optionType: 'checkbox',
      image: null,
      isRequired: false,
      options: ['Red', 'Green', 'Blue'],
      onChange: onChangeMock,
    };

    const component = render(<AnswerFormQuestions {...defaultProps} />);

    fireEvent.click(component.getByLabelText('Red'));

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['Red']);

    fireEvent.click(component.getByLabelText('Blue'));

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

    const component = render(<AnswerFormQuestions {...defaultProps} />);

    expect(
      component.container.getElementsByClassName('answer-input-type radio')[0],
    ).toBeDefined();
  });

  test('Checkbox should unset', async () => {
    const onChangeMock = jest.fn();

    const defaultProps = {
      title: 'What are your favorite colors?',
      optionType: 'checkbox',
      image: null,
      isRequired: false,
      options: ['Red', 'Green', 'Blue'],
      onChange: onChangeMock,
    };

    const component = render(<AnswerFormQuestions {...defaultProps} />);

    fireEvent.click(component.getByLabelText('Red'));

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(['Red']);

    fireEvent.click(component.getByLabelText('Red'));

    expect(onChangeMock).toHaveBeenCalledTimes(2);

    expect(onChangeMock).toHaveBeenCalledWith([]);
  });

  test('Date should change correctly', async () => {
    const onChangeMock = jest.fn();

    const defaultProps = {
      title: 'When were you born?',
      optionType: 'date',
      image: null,
      isRequired: false,
      options: [''],
      onChange: onChangeMock,
    };

    const component = render(<AnswerFormQuestions {...defaultProps} />);

    const element = component.container.getElementsByClassName(
      'answer-input-type date',
    )[0];

    fireEvent.change(element, { target: { value: '2002-07-05' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('2002-07-05');
  });

  test('Image should render correctly', async () => {
    const onChangeMock = jest.fn();

    const defaultProps = {
      title: 'When were you born?',
      optionType: 'date',
      image: 'test.png',
      isRequired: false,
      options: [''],
      onChange: onChangeMock,
    };

    const component = render(<AnswerFormQuestions {...defaultProps} />);

    expect(
      component.container.getElementsByClassName('answer-form-image')[0],
    ).toBeDefined();
  });
});
