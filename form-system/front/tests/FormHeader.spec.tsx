import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { FormHeader } from '../src/components/CreateForm/CreateFormBody/FormHeader/FormHeader';

describe('FormHeader.tsx', () => {
  test('Form description sets correctly', async () => {
    const onChangeMock = jest.fn();

    const { container } = render(
      <FormHeader id={'0'} onChange={onChangeMock} />,
    );

    const element = container.querySelector('[data-hook="form-description"]')!;

    fireEvent.change(element, {
      target: { value: 'Test description' },
    });

    expect(element.getAttribute('value')).toBe('Test description');
  });

  test('Form user sets correctly', async () => {
    const onChangeMock = jest.fn();

    const { container } = render(
      <FormHeader id={'0'} onChange={onChangeMock} />,
    );

    const element = container.querySelector('[data-hook="user-email"]')!;

    fireEvent.change(element, {
      target: { value: 'test@gmail.com' },
    });

    expect(element.getAttribute('value')).toBe('test@gmail.com');
  });
});
