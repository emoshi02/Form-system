import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { CreateForm } from '../src/components/CreateForm/CreateFormBody/CreateForm';
import { BrowserRouter } from 'react-router-dom';
import { FORM_DATA } from './testData';

describe('Create form', () => {
  test('Form empty state renders when Form data is null', async () => {
    const component = render(
      <BrowserRouter>
        <CreateForm formData={null} />
      </BrowserRouter>,
    );

    expect(
      component.container
        .getElementsByClassName('form-title')[0]
        .getAttribute('value'),
    ).toBe('Untitled Form');
  });

  test('Null Form on submit prevents default', async () => {
    const component = render(
      <BrowserRouter>
        <CreateForm formData={null} />
      </BrowserRouter>,
    );

    const preventDefault = jest.fn();

    const element = component.container.getElementsByTagName('form')[0];
    element.addEventListener('submit', preventDefault);
    fireEvent.submit(element);
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  test('Form on submit prevents default', async () => {
    const component = render(
      <BrowserRouter>
        <CreateForm formData={FORM_DATA} />
      </BrowserRouter>,
    );

    const preventDefault = jest.fn();

    const element = component.container.getElementsByTagName('form')[0];
    element.addEventListener('submit', preventDefault);
    fireEvent.submit(element);

    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  test('Form state updates correctly', async () => {
    const component = render(
      <BrowserRouter>
        <CreateForm formData={FORM_DATA} />
      </BrowserRouter>,
    );

    fireEvent.change(
      component.container.getElementsByClassName('form-title')[0],
      { target: { value: 'Test Title' } },
    );

    expect(
      component.container
        .getElementsByClassName('form-title')[0]
        .getAttribute('value'),
    ).toBe('Test Title');
  });
});
