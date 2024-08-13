import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { AnswerForm } from '../src/components/AnswerForm/AnswerForm';
import { FORM_DATA } from './testData';
import { BrowserRouter } from 'react-router-dom';

describe('Answer form', () => {
  test('Should render empty form when there are no answers', async () => {
    const component = render(<AnswerForm formData={null} />);

    expect(component.getByText('Untitled Form')).toBeDefined();
    expect(
      component.container.getElementsByClassName('answer-form-question'),
    ).toHaveLength(0);
  });

  test('Null Form on submit prevents default', async () => {
    const preventDefault = jest.fn();

    const component = render(
      <BrowserRouter>
        <AnswerForm formData={null} />
      </BrowserRouter>,
    );

    const element = component.container.getElementsByTagName('form')[0];
    element.addEventListener('submit', preventDefault);
    fireEvent.submit(element);

    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  test('Form on submit prevents default', async () => {
    const preventDefault = jest.fn();

    const component = render(
      <BrowserRouter>
        <AnswerForm formData={FORM_DATA} />
      </BrowserRouter>,
    );

    const element = component.container.getElementsByTagName('form')[0];
    element.addEventListener('submit', preventDefault);
    fireEvent.submit(element);

    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  test('Empty optionType and image props should get default values', async () => {
    const formData = {
      id: 121,
      title: 'Test form',
      questions: ['Why is it important to write tests?'],
      user: 'test@gmail.com',
      options: [['To keep code consistent', 'For fun']],
    };

    const component = render(
      <BrowserRouter>
        <AnswerForm formData={formData} />
      </BrowserRouter>,
    );

    expect(
      component.container.getElementsByClassName('answer-input-type radio'),
    ).toBeDefined();

    expect(
      component.container.getElementsByClassName('answer-form-image')[0],
    ).toBeUndefined();
  });

  test('Empty options should return []', async () => {
    const formData = {
      id: 121,
      title: 'Test form',
      questions: ['Why is it important to write tests?'],
      user: 'test@gmail.com',
    };

    const component = render(
      <BrowserRouter>
        <AnswerForm formData={formData} />
      </BrowserRouter>,
    );

    expect(
      component.container.getElementsByClassName('option-wrapper')[0],
    ).toBeUndefined();
  });

  test('Empty questions should return []', async () => {
    const formData = {
      id: 121,
      title: 'Test form',
      user: 'test@gmail.com',
    };

    const component = render(
      <BrowserRouter>
        <AnswerForm formData={formData} />
      </BrowserRouter>,
    );

    expect(
      component.container.getElementsByClassName('answer-form-question')[0],
    ).toBeUndefined();
  });
});
