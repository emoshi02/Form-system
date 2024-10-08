import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { CreateForm } from '../src/components/CreateForm/CreateFormBody/CreateForm';
import { BrowserRouter } from 'react-router-dom';
import { FORM_DATA } from './testData';

describe('CreateForm.tsx', () => {
  test('Form empty state renders when Form data is null', async () => {
    const { container } = render(
      <BrowserRouter>
        <CreateForm formData={null} />
      </BrowserRouter>,
    );

    expect(
      container
        .querySelector('[data-hook="form-title"]')
        ?.getAttribute('value'),
    ).toBe('Untitled Form');
  });

  test('Null Form on submit prevents default', async () => {
    const preventDefaultMock = jest.fn();

    const { container } = render(
      <BrowserRouter>
        <CreateForm formData={null} />
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
        <CreateForm formData={FORM_DATA} />
      </BrowserRouter>,
    );

    const element = container.getElementsByTagName('form')[0];
    element.addEventListener('submit', preventDefaultMock);
    fireEvent.submit(element);

    expect(preventDefaultMock).toHaveBeenCalledTimes(1);
  });

  test('Form state updates correctly', async () => {
    const { container } = render(
      <BrowserRouter>
        <CreateForm formData={FORM_DATA} />
      </BrowserRouter>,
    );

    const element = container.querySelector('[data-hook="form-title"]')!;

    fireEvent.change(element, {
      target: { value: 'Test Title' },
    });

    expect(element.getAttribute('value')).toBe('Test Title');

    fireEvent.change(element, {
      target: { value: 'New Title' },
    });

    expect(element.getAttribute('value')).not.toBe('Test Title');
    expect(element.getAttribute('value')).toBe('New Title');
  });
});
