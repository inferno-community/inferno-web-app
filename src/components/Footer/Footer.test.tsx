import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('renders Inferno Footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Open Source/i);
  expect(linkElement).toBeInTheDocument();
});
