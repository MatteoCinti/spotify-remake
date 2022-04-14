import Head from 'next/head';
import styled from 'styled-components';
// import Link from 'next/link';
import { Sidebar } from '@components';
import Package from '@root/package.json';

const StyledHeader = styled.header`
  background: red;
`;

const IndexPage = (): JSX.Element => (
  <>
    <Head>
      <title>{Package.description}</title>
    </Head>

    <main>
      <StyledHeader className="flex flex-col items-center justify-center py-2">
        <p>This is a dope Spotify 2.0 Build</p>
      </StyledHeader>
      <Sidebar />
      {/* Center */}
    </main>

    <section>{/* Player */}</section>
  </>
);

export default IndexPage;
