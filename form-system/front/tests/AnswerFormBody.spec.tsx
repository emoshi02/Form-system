import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { AnswerFormBody } from '../src/components/AnswerForm/AnswerFormBody/AnswerFormBody';

describe('Answer Form body', () => {
  const onSubmitMock = jest.fn();

  const defaultProps = {
    question: 'Do you like writing tests?',
    optionType: 'radio',
    image: null,
    isRequired: true,
    options: ['Yes', 'No'],
  };

  test('Answer Form body state updates correctly', async () => {
    const component = render(
      <AnswerFormBody questionsData={[defaultProps]} onSubmit={onSubmitMock} />,
    );

    const element = component.getByLabelText('Yes') as HTMLInputElement;

    fireEvent.click(element);

    expect(element.checked).toBe(true);
  });
});
