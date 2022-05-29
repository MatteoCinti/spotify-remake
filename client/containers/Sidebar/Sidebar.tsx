import { Aside } from '@components';
import tw from 'twin.macro';
import { Navigation } from './wrappers';

function Sidebar(): JSX.Element {
  return (
    <Aside data-testid="sidebar">
      <Navigation />

      {/* Plylists */}
      {/* spacing between elements */}
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
      <p css={tw`cursor-pointer hover:text-white`}>Playlist Name ...</p>
    </Aside>
  );
}

export default Sidebar;
