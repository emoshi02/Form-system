import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import * as router from 'react-router';
import { SubmitBtn } from '../src/components/SubmitButton/SubmitBtn';

describe('Submit button', () => {
  const value = 'Test Button Value';
  test('Navigate to Main page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const component = render(
      <BrowserRouter>
        <SubmitBtn value={value} />
      </BrowserRouter>,
    );

    fireEvent.click(component.getByText(value));
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/main');
  });
});
