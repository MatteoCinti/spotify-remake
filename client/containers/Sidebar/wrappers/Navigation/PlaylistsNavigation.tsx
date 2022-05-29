import { HeartIcon, PlusCircleIcon } from '@heroicons/react/outline';

import { Button, HorizontalRule as Hr } from '@components';
import { iconStyles } from '../../styles';

function PlaylistNavigation(): JSX.Element {
  return (
    <>
      <Button type="button">
        <PlusCircleIcon css={iconStyles} />
        <p>Create Playlist</p>
      </Button>
      <Button type="button">
        <HeartIcon css={iconStyles} />
        <p>Your Favorites</p>
      </Button>

      <Hr />
    </>
  );
}

export default PlaylistNavigation;
