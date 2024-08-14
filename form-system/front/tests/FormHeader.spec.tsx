import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { FormHeader } from '../src/components/CreateForm/CreateFormBody/FormHeader/FormHeader';

describe('FormHeader.tsx', () => {
  test('Form description sets correctly', async () => {
    const onChangeMock = jest.fn();

    const { container } = render(<FormHeader id={0} onChange={onChangeMock} />);

    fireEvent.change(container.getElementsByClassName('form-desc')[0], {
      target: { value: 'Test description' },
    });

    expect(
      container.getElementsByClassName('form-desc')[0].getAttribute('value'),
    ).toBe('Test description');
  });

  test('Form user sets correctly', async () => {
    const onChangeMock = jest.fn();

    const { container } = render(<FormHeader id={0} onChange={onChangeMock} />);

    fireEvent.change(container.getElementsByClassName('user-email')[0], {
      target: { value: 'test@gmail.com' },
    });

    expect(
      container.getElementsByClassName('user-email')[0].getAttribute('value'),
    ).toBe('test@gmail.com');
  });
});
