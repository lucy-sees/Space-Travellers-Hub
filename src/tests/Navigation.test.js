import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom to extend expect
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('renders the logo and navigation links', () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );

  // Verify that the logo is present - using alt text
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();

  // Verify that the Missions link is present with the text "Missions"
  const missionsLink = screen.getByRole('link', { name: /Missions/i });
  expect(missionsLink).toBeInTheDocument();

  // Verify that the Rockets link is present with the text "Rockets"
  const rocketsLink = screen.getByRole('link', { name: /Rockets/i });
  expect(rocketsLink).toBeInTheDocument();
});
