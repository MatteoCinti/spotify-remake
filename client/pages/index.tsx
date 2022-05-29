import { Sidebar } from '@containers';
import tw from 'twin.macro';

function LandingPage(): JSX.Element {
  return (
    <div css={tw`bg-black h-screen overflow-hidden`}>
      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <section>{/* Player */}</section>
    </div>
  );
}

export default LandingPage;
