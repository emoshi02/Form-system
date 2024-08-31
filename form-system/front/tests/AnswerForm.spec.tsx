import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { AnswerForm } from '../src/components/AnswerForm/AnswerForm';
import { FORM_DATA } from './testData';
import { BrowserRouter } from 'react-router-dom';

describe('AnswerForm.tsx', () => {
  test('Should render empty form when there are no answers', async () => {
    const { getByText, container } = render(
      <BrowserRouter>
        <AnswerForm formData={null} />
      </BrowserRouter>,
    );

    expect(getByText('Untitled Form')).toBeDefined();
    expect(
      container.querySelector('[data-hook="answer-form-question"]'),
    ).toBeNull();
  });

  test('Null Form on submit prevents default', async () => {
    const preventDefaultMock = jest.fn();

    const { container } = render(
      <BrowserRouter>
        <AnswerForm formData={null} />
      </BrowserRouter>,
    );

    const element = container.getElementsByTagName('form')[0];
    element.addEventListener('submit', preventDefaultMock);
    fireEvent.submit(element);

    expect(preventDefaultMock).toHaveBeenCalledTimes(1);
  });

  test('Form on submit prevents default', async () => {
    const preventDefaultMock = jest.fn();

    const { container } = render(
      <BrowserRouter>
        <AnswerForm formData={FORM_DATA} />
      </BrowserRouter>,
    );

    const element = container.getElementsByTagName('form')[0];
    element.addEventListener('submit', preventDefaultMock);
    fireEvent.submit(element);

    expect(preventDefaultMock).toHaveBeenCalledTimes(1);
  });

  test('Empty optionType and image props should get default values', async () => {
    const formData = {
      id: 'e5d80ec7-2b6f-4445-8c32-c2715d671dc6',
      title: 'Test form',
      questions: ['Why is it important to write tests?'],
      user: 'test@gmail.com',
      options: [['To keep code consistent', 'For fun']],
    };

    const { container } = render(
      <BrowserRouter>
        <AnswerForm formData={formData} />
      </BrowserRouter>,
    );

    expect(
      container.getElementsByClassName('answer-input-type radio'),
    ).toBeDefined();

    expect(
      container.getElementsByClassName('answer-form-image')[0],
    ).toBeUndefined();
  });

  test('Empty options should return empty array', async () => {
    const formData = {
      id: 'e5d80ec7-2b6f-4445-8c32-c2715d671dc6d',
      title: 'Test form',
      questions: ['Why is it important to write tests?'],
      user: 'test@gmail.com',
    };

    const { container } = render(
      <BrowserRouter>
        <AnswerForm formData={formData} />
      </BrowserRouter>,
    );

    expect(
      container.querySelector('[data-hook="answer-option-wrapper"]'),
    ).toBeNull();
  });

  test('Empty questions should return empty array', async () => {
    const formData = {
      id: 'e5d80ec7-2b6f-4445-8c32-c2715d671dc6',
      title: 'Test form',
      user: 'test@gmail.com',
    };

    const { container } = render(
      <BrowserRouter>
        <AnswerForm formData={formData} />
      </BrowserRouter>,
    );

    expect(
      container.getElementsByClassName('answer-form-question')[0],
    ).toBeUndefined();
  });
});
