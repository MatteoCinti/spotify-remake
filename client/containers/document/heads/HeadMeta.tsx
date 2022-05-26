import React from 'react';
import Package from '@root/package.json';

const HeadMeta = () => {
  return (
    <>
      <title>{Package.description}</title>
    </>
  );
};

export default HeadMeta;
