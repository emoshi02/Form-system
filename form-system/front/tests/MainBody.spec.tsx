import { describe, expect, jest, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as router from 'react-router';
import { MainBody } from '../src/components/MainPage/MainBody';
import { RECEIVED_FORMS, RECENT_FORMS } from './testData';

describe('Main page body', () => {
  test('Navigate to Create Form Page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const component = render(
      <BrowserRouter>
        <MainBody activeSectionIndex={0} />
      </BrowserRouter>,
    );
    fireEvent.click(
      component.container.getElementsByClassName('create-form-btn')[0],
    );
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/createForm');
  });

  test('Forms change from RECENT to RECEIVED initially', async () => {
    const component = render(
      <BrowserRouter>
        <MainBody activeSectionIndex={1} />
      </BrowserRouter>,
    );

    expect(component.getByText(RECEIVED_FORMS[0].title)).toBeDefined();
    expect(component.queryByText(RECENT_FORMS[0].title)).toBeNull();
  });

  test('First form was deleted on click', async () => {
    const component = render(
      <BrowserRouter>
        <MainBody activeSectionIndex={0} />
      </BrowserRouter>,
    );

    expect(component.getByText(RECENT_FORMS[0].title)).toBeDefined();

    fireEvent.click(component.getAllByText('delete')[0]);

    expect(component.queryByText(RECENT_FORMS[0].title)).toBeNull();
  });

  test('Middle element form was deleted on click', async () => {
    const component = render(
      <BrowserRouter>
        <MainBody activeSectionIndex={0} />
      </BrowserRouter>,
    );

    const index = (RECENT_FORMS.length - 1) / 2;

    expect(component.getByText(RECENT_FORMS[index].title)).toBeDefined();

    fireEvent.click(component.getAllByText('delete')[index]);

    expect(component.queryByText(RECENT_FORMS[index].title)).toBeNull();
  });

  test('Last form was deleted on click', async () => {
    const component = render(
      <BrowserRouter>
        <MainBody activeSectionIndex={0} />
      </BrowserRouter>,
    );

    const index = RECENT_FORMS.length - 1;

    expect(component.getByText(RECENT_FORMS[index].title)).toBeDefined();

    fireEvent.click(component.getAllByText('delete')[index]);

    expect(component.queryByText(RECENT_FORMS[index].title)).toBeNull();
  });
});
