import Navbar from '../Navbar/Navbar';
import React from 'react';

const Layout: React.FC = (props) => {
  return(
    <>
      <Navbar/>
      {props.children}
    </>
  );
};

export default Layout;