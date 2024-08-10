import { describe, expect, jest, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as router from 'react-router';
import { Header } from '../src/components/Header/Header';

describe('Header', () => {
  test('Navigate to Main page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    fireEvent.click(
      component.container.getElementsByClassName('nav-wrapper')[0],
    );
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/main');
  });

  test('User modal opens on click', () => {
    const component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    fireEvent.click(component.getByText('account_circle'));

    expect(
      component.container.getElementsByClassName('user-modal-wrapper')[0],
    ).toBeDefined();
  });

  test('User modal closes on outside click', async () => {
    const component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    fireEvent.click(component.getByText('account_circle'));
    fireEvent.mouseDown(document.body);

    expect(
      component.container.getElementsByClassName('user-modal-wrapper')[0],
    ).toBeUndefined();
  });

  test('User modal closes on Cancel button click', async () => {
    const component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    fireEvent.click(component.getByText('account_circle'));
    fireEvent.click(component.getByText('Cancel'));

    expect(
      component.container.getElementsByClassName('user-modal-wrapper')[0],
    ).toBeUndefined();
  });
});
