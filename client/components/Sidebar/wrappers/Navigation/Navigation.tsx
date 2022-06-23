import React from 'react';
import tw from 'twin.macro';

import UserNavigation from './UserNavigation';
import PlaylistsNavigation from './PlaylistsNavigation';

const StyledNavigation = tw.nav`
  space-y-4
`;

function Navigation(): JSX.Element {
  return (
    <StyledNavigation>
      <UserNavigation />
      <PlaylistsNavigation />
    </StyledNavigation>
  );
}

export default Navigation;
