import { Head } from 'next/document';

import { FontImport, HeadMeta } from './heads';

function DocumentHead(): JSX.Element {
  return (
    <Head>
      <FontImport />
      <HeadMeta />
    </Head>
  );
}

export default DocumentHead;
