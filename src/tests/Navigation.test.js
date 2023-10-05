import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('renders the logo and navigation links', () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );

  // Verify that the logo is present
  const logo = screen.getByRole('img', { name: /logo/i });
  expect(logo).toBeInTheDocument();

  // Verify that the missons links are present
  const missionsLink = screen.getByRole('link', { name: /Missions/i });
  expect(missionsLink).toBeInTheDocument();

  // Verify that the rockets links are present
  const rocketsLink = screen.getByRole('link', { name: /Rockets/i });
  expect(rocketsLink).toBeInTheDocument();
});
