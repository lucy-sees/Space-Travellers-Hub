import { render, screen } from '@testing-library/react';
import App from './App';

test('renders entire page', () => {
  render(<App />);
  screen.debug();
});
