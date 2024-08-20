import { describe, expect, test, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserModal } from '../src/components/Header/UserModal/UserModal';
import * as router from 'react-router';

describe('UserModal.tsx', () => {
  test('Navigate to Main page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const { getByText } = render(
      <BrowserRouter>
        <UserModal setOpenModal={() => true} />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('Logout'));
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  test('Closes User modal', async () => {
    const onModalCloseMock = jest.fn();
    const { getByText } = render(
      <BrowserRouter>
        <UserModal setOpenModal={onModalCloseMock} />
      </BrowserRouter>,
    );
    fireEvent.click(getByText('Cancel'));
    expect(onModalCloseMock).toHaveBeenCalledTimes(1);
    expect(onModalCloseMock).toHaveBeenCalledWith(false);
  });
});
