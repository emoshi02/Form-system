import { describe, expect, jest, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as router from 'react-router';
import { LoginForm } from '../src/components/LoginPage/LoginForm/LoginForm';

describe('LoginForm.tsx', () => {
  test('Navigate to Main page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const { getByText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>,
    );

    fireEvent.submit(getByText('Login'));
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/main');
  });
});
