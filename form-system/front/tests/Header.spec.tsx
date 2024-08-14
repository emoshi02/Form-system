import { describe, expect, jest, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as router from 'react-router';
import { Header } from '../src/components/Header/Header';

describe('Header', () => {
  test('Navigate to Main page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    fireEvent.click(container.getElementsByClassName('nav-wrapper')[0]);
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/main');
  });

  test('User modal opens on click', () => {
    const { getByText, container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('account_circle'));

    expect(
      container.getElementsByClassName('user-modal-wrapper')[0],
    ).toBeDefined();
  });

  test('User modal closes on outside click', async () => {
    const { getByText, container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('account_circle'));
    fireEvent.mouseDown(document.body);

    expect(
      container.getElementsByClassName('user-modal-wrapper')[0],
    ).toBeUndefined();
  });

  test('User modal closes on Cancel button click', async () => {
    const { getByText, container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('account_circle'));
    fireEvent.click(getByText('Cancel'));

    expect(
      container.getElementsByClassName('user-modal-wrapper')[0],
    ).toBeUndefined();
  });
});
