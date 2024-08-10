import { describe, expect, test, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserModal } from '../src/components/Header/UserModal/UserModal';
import * as router from 'react-router';

describe('User Modal', () => {
  test('Navigate to Main page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const component = render(
      <BrowserRouter>
        <UserModal setOpenModal={() => true} />
      </BrowserRouter>,
    );

    fireEvent.click(component.getByText('Logout'));
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  test('Close User modal', async () => {
    const onModalCloseMock = jest.fn();
    const component = render(
      <BrowserRouter>
        <UserModal setOpenModal={onModalCloseMock} />
      </BrowserRouter>,
    );
    fireEvent.click(component.getByText('Cancel'));
    expect(onModalCloseMock).toHaveBeenCalledTimes(1);
    expect(onModalCloseMock).toHaveBeenCalledWith(false);
  });
});
