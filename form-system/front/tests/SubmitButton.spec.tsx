import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import * as router from 'react-router';
import { SubmitButton } from '../src/components/SubmitButton/SubmitButton';

describe('SubmitButton.tsx', () => {
  const buttonValue = 'Test Button Value';
  test('Navigate to Main page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const { getByText } = render(
      <BrowserRouter>
        <SubmitButton value={buttonValue} />
      </BrowserRouter>,
    );

    fireEvent.click(getByText(buttonValue));
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/main');
  });
});
