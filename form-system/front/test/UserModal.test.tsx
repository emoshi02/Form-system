import { describe, expect, test, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { UserModal } from '../src/components/UserModal/UserModal';
import React from 'react';

describe('User Modal', () => {
  test('Navigate to Main page', () => {});

  test('Close User modal', () => {
    const onModalCloseMock = jest.fn();
    const component = render(<UserModal setOpenModal={onModalCloseMock} />);
    fireEvent.click(component.getByLabelText('Cancel'));
    expect(onModalCloseMock).toHaveBeenCalledTimes(1);
    expect(onModalCloseMock).toHaveBeenCalledWith(false);
  });
});
