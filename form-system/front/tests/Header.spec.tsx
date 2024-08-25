import { describe, expect, jest, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as router from 'react-router';
import { Header } from '../src/components/Header/Header';

describe('Header.tsx', () => {
  test('Navigate to Main page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    fireEvent.click(container.querySelector('[data-hook="nav-wrapper"]')!);
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
      container.querySelector('[data-hook="user-modal-wrapper"]'),
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
      container.querySelector('[data-hook="user-modal-wrapper"]'),
    ).toBeNull();
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
      container.querySelector('[data-hook="user-modal-wrapper"]'),
    ).toBeNull();
  });
});
