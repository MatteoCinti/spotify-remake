import { render, screen } from '@testing-library/react';
import App from '../index';

describe('The application', () => {
  it('renders a sidebar', () => {
    render(<App />);
    const sidebar = screen.getByRole('complementary');
    const sidebarByTestId = screen.getByTestId('sidebar');

    expect(sidebar).toBeInTheDocument();
    expect(sidebarByTestId).toBeInTheDocument();
  });
});
