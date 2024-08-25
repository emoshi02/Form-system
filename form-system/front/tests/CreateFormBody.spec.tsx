import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { CreateFormBody } from '../src/components/CreateForm/CreateFormBody/CreateFormBody';
import { BrowserRouter } from 'react-router-dom';
import { FORM_DATA } from './testData';

describe('CreateFormBody.tsx', () => {
  test('Should render CreateForm page when activeSectionIndex is 0', async () => {
    const { container } = render(
      <BrowserRouter>
        <CreateFormBody activeSectionIndex={0} formData={FORM_DATA} />
      </BrowserRouter>,
    );

    expect(container.getElementsByTagName('form')[0]).toBeDefined;
  });

  test('Should render Answer page when activeSectionIndex is 1', async () => {
    window.ResizeObserver =
      window.ResizeObserver ||
      jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
      }));

    const { container } = render(
      <BrowserRouter>
        <CreateFormBody activeSectionIndex={1} formData={FORM_DATA} />
      </BrowserRouter>,
    );

    expect(container.querySelector('[data-hook="answers"]')).toBeDefined;
  });
});
