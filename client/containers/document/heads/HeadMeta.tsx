import React from 'react';
import Package from '@root/package.json';

function HeadMeta(): JSX.Element {
  return (
    <>
      <title>{Package.description}</title>
    </>
  );
}

export default HeadMeta;
