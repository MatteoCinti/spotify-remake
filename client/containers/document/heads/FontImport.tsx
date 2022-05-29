import React from 'react';

function FontImport(): JSX.Element {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ultra&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

export default FontImport;
