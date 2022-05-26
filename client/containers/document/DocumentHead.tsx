import { Head } from 'next/document';

import { FontImport, HeadMeta } from './heads';

const DocumentHead = () => {
  return (
    <Head>
      <FontImport />
      <HeadMeta />
    </Head>
  );
};

export default DocumentHead;
