import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { AnswerFormBody } from '../src/components/AnswerForm/AnswerFormBody/AnswerFormBody';
import { BrowserRouter } from 'react-router-dom';

describe('AnswerFormBody.tsx', () => {
  test('Answer Form body state should update correctly', async () => {
    const defaultProps = {
      question: 'Do you like writing tests?',
      optionType: 'radio',
      image: null,
      isRequired: true,
      options: ['Yes', 'No'],
    };

    const { getByLabelText } = render(
      <BrowserRouter>
        <AnswerFormBody questionsData={[defaultProps]} />
      </BrowserRouter>,
    );

    const element = getByLabelText('Yes') as HTMLInputElement;

    fireEvent.click(element);

    expect(element.checked).toBe(true);
  });

  test('Answer Form body state should update correctly when multiple choices selected', async () => {
    const defaultProps = {
      question: 'Do you like writing tests?',
      optionType: 'check_box_outline_blank',
      image: null,
      isRequired: true,
      options: ['Yes', 'YESS'],
    };

    const { getByLabelText } = render(
      <BrowserRouter>
        <AnswerFormBody questionsData={[defaultProps]} />
      </BrowserRouter>,
    );

    const element = getByLabelText('Yes') as HTMLInputElement;

    fireEvent.click(element);

    expect(element.checked).toBe(true);
  });
});
