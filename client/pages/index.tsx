import tw from 'twin.macro';

import { Sidebar } from '@components';

const StyledHeader = tw.header`
  bg-blue-500
  font-ultra
  flex
  flex-col
  items-center
  justify-center
  py-2
`;

const LandingPage = (): JSX.Element => (
  <>
    <main>
      <StyledHeader>
        <p>This is a dope Spotify 2.0 Build</p>
      </StyledHeader>
      <Sidebar />
      {/* Center */}
    </main>

    <section>{/* Player */}</section>
  </>
);

export default LandingPage;
