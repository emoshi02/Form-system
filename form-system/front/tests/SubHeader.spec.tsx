import { describe, expect, jest, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { SubHeader } from '../src/components/SubHeader/SubHeader';

describe('SubHeader', () => {
  test('Active page index set correctly', async () => {
    const setActiveSectionIndexMock = jest.fn();

    const { container } = render(
      <SubHeader
        sections={['test1', 'test2']}
        activeSectionIndex={0}
        setActiveSectionIndex={setActiveSectionIndexMock}
      />,
    );

    const activeSection =
      container.getElementsByClassName('header-nav-item')[0];

    fireEvent.click(activeSection);

    expect(setActiveSectionIndexMock).toBeCalledTimes(1);
    expect(activeSection.classList.contains('active')).toBe(true);
  });
});
