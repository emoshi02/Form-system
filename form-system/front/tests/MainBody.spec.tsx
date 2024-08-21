import { describe, expect, jest, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as router from 'react-router';
import { MainBody } from '../src/components/MainPage/MainBody';
import { RECEIVED_FORMS, RECENT_FORMS } from './testData';

describe('MainPageBody.tsx', () => {
  test('Navigate to Create Form Page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const { container } = render(
      <BrowserRouter>
        <MainBody activeSectionIndex={0} />
      </BrowserRouter>,
    );
    fireEvent.click(container.getElementsByClassName('create-form-btn')[0]);
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/createForm');
  });

  test('Should render RECEIVED forms when activeSectionIndex is 1', async () => {
    const { getByText, queryByText } = render(
      <BrowserRouter>
        <MainBody activeSectionIndex={1} />
      </BrowserRouter>,
    );

    expect(getByText(RECEIVED_FORMS[0].title)).toBeDefined();
    expect(queryByText(RECENT_FORMS[0].title)).toBeNull();
  });

  test('First form was deleted on click', async () => {
    const { getByText, getAllByText, queryByText } = render(
      <BrowserRouter>
        <MainBody activeSectionIndex={0} />
      </BrowserRouter>,
    );

    expect(getByText(RECENT_FORMS[0].title)).toBeDefined();

    fireEvent.click(getAllByText('delete')[0]);

    expect(queryByText(RECENT_FORMS[0].title)).toBeNull();
  });

  test('Middle element form was deleted on click', async () => {
    const { getByText, getAllByText, queryByText } = render(
      <BrowserRouter>
        <MainBody activeSectionIndex={0} />
      </BrowserRouter>,
    );

    const index = Math.floor((RECENT_FORMS.length - 1) / 2);

    expect(getByText(RECENT_FORMS[index].title)).toBeDefined();

    fireEvent.click(getAllByText('delete')[index]);

    expect(queryByText(RECENT_FORMS[index].title)).toBeNull();
  });

  test('Last form was deleted on click', async () => {
    const { getByText, getAllByText, queryByText } = render(
      <BrowserRouter>
        <MainBody activeSectionIndex={0} />
      </BrowserRouter>,
    );

    const index = RECENT_FORMS.length - 1;

    expect(getByText(RECENT_FORMS[index].title)).toBeDefined();

    fireEvent.click(getAllByText('delete')[index]);

    expect(queryByText(RECENT_FORMS[index].title)).toBeNull();
  });
});
