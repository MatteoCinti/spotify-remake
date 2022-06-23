import { HomeIcon, LibraryIcon, SearchIcon } from '@heroicons/react/outline';

import { Button, HorizontalRule as Hr } from '@components';
import { iconStyles } from '../../styles';

function UserNavigation(): JSX.Element {
  return (
    <>
      <Button type="button">
        <HomeIcon css={iconStyles} />
        <p>Home</p>
      </Button>
      <Button type="button">
        <SearchIcon css={iconStyles} />
        <p>Search</p>
      </Button>
      <Button type="button">
        <LibraryIcon css={iconStyles} />
        <p>Your Library</p>
      </Button>

      <Hr />
    </>
  );
}

export default UserNavigation;
