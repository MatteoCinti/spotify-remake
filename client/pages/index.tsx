import Head from 'next/head';
// import Link from 'next/link';
import { Sidebar } from '@components';
import Package from '@root/package.json';

const IndexPage = () => (
  <>
    <Head>
      <title>{Package.description}</title>
    </Head>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p>This is a dope Spotify 2.0 Build</p>
    </div>

    <main>
      <Sidebar />
      {/* Center */}
    </main>

    <section>{/* Player */}</section>
  </>
);

export default IndexPage;
