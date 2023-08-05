import Navbar from '@/components/Navbar';
import React from 'react';

const with_layout = ({children}) => {
  return (
    <div>
     <Navbar></Navbar>
        {children}
        <footer>
          <h1>
            footer
          </h1>
        </footer>
    </div>
  );
};

export default with_layout;