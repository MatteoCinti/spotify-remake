import React from 'react';
import tw from 'twin.macro';

const StyledSideBar = tw.aside`
  bg-blue-500
  text-black
`;

const Sidebar: React.FC = () => {
  return <StyledSideBar>Sidebar</StyledSideBar>;
};

export default Sidebar;
