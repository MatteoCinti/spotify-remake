import { Main, NextScript } from 'next/document';
import React from 'react';

function DocumentBody(): JSX.Element {
  return (
    <body>
      <Main />
      <NextScript />
    </body>
  );
}

export default DocumentBody;
