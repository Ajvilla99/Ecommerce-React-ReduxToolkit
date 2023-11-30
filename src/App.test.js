import { render, screen } from '@testing-library/react';
import Ecommerce from './Ecommerce';

test('renders learn react link', () => {
  render(<Ecommerce />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
