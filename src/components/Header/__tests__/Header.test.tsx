import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders Inferno Header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Inferno/i);
  expect(linkElement).toBeInTheDocument();
});
