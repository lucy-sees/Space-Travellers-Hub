import { render, screen } from '@testing-library/react';
import App from './App';

test('renders entire page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Space Travelers' Hub/i);
  expect(linkElement).toBeInTheDocument();
});
