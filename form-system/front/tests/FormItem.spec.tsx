import { describe, expect, jest, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as router from 'react-router';
import { FormItem } from '../src/components/MainPage/FormItem/FormItem';
import { FORM_DATA } from './testData';

describe('FormItem.tsx', () => {
  test('On form click navigates to Update form page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const { container } = render(
      <BrowserRouter>
        <FormItem
          formData={FORM_DATA}
          onDeleteButtonClick={() => {}}
          isAnswerForm={false}
        />
      </BrowserRouter>,
    );

    fireEvent.click(
      container.querySelector('[data-hook="form-item-wrapper"]')!,
    );

    const formData = FORM_DATA;

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith(`/updateForm/${formData.id}`, {
      state: { formData },
    });
  });

  test('On form click navigates to Answer form page', async () => {
    const navigateMock = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const { container } = render(
      <BrowserRouter>
        <FormItem
          formData={FORM_DATA}
          onDeleteButtonClick={() => {}}
          isAnswerForm={true}
        />
      </BrowserRouter>,
    );

    fireEvent.click(
      container.querySelector('[data-hook="form-item-wrapper"]')!,
    );

    const formData = FORM_DATA;

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith(`/answerForm/${formData.id}`, {
      state: { formData },
    });
  });
});
