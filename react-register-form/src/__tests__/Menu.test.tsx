import React from 'react';
import { render } from '@testing-library/react';
import Menu from '../pages/menu';

const TitleInPage = 'Menu';
const TextInPage = 'This is menu content';

test('Meun page render', () => {
  const { getByText } = render(<Menu />);
  expect(getByText(TitleInPage)).toBeTruthy();
  expect(getByText(TextInPage)).toBeTruthy();
});
