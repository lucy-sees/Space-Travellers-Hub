import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('renders Navbar correctly', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});
