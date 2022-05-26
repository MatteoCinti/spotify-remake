import { render, screen } from '@testing-library/react';
import Sidebar from '..';

const navigationLinks = ['Home', 'Search', 'Your Library'];
const playlistLinks = ['Create Playlist', 'Your Favorites'];

describe('The sidebar', () => {
  it('renders navigation', () => {
    render(<Sidebar />);
    const navigationNodes = navigationLinks.map((nodeName) => {
      return screen.getByRole('button', { name: nodeName });
    });

    navigationNodes.forEach((node) => {
      expect(node).toBeInTheDocument();
    });
  });
  it('renders playlist navigation', () => {
    render(<Sidebar />);
    const playlistNodes = playlistLinks.map((nodeName) => {
      return screen.getByRole('button', { name: nodeName });
    });

    playlistNodes.forEach((node) => {
      expect(node).toBeInTheDocument();
    });
  });
});
