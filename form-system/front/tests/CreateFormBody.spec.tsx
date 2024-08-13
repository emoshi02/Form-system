import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { CreateFormBody } from '../src/components/CreateForm/CreateFormBody/CreateFormBody';
import { BrowserRouter } from 'react-router-dom';
import { FORM_DATA } from './testData';

describe('Create form body', () => {
  test('Navigate to Create form page initially', async () => {
    const component = render(
      <BrowserRouter>
        <CreateFormBody activeSectionIndex={0} formData={FORM_DATA} />
      </BrowserRouter>,
    );

    expect(component.container.getElementsByTagName('form')[0]).toBeDefined;
  });

  test('Navigate to Answers page initially', async () => {
    window.ResizeObserver =
      window.ResizeObserver ||
      jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
      }));

    const component = render(
      <BrowserRouter>
        <CreateFormBody activeSectionIndex={1} formData={FORM_DATA} />
      </BrowserRouter>,
    );

    expect(component.container.getElementsByClassName('answer-page')[0])
      .toBeDefined;
  });
});
