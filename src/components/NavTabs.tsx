import React, { JSX } from 'react';

interface NavTabsProps {
  currentPage: string;
  handlePageChange: (page: string) => void;
}

function NavTabs({ currentPage, handlePageChange }: NavTabsProps): JSX.Element {
  return (
    <nav>
      <ul>
     
          <a
            href="#home"
            className={`button ${currentPage === 'Home' ? 'active' : ''}`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              handlePageChange('Home');
            }}
          >
            Home
          </a>
       
          <a
            href="#work"
            className={`button ${currentPage === 'Work' ? 'active' : ''}`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              handlePageChange('Work');
            }}
          >
            Web Dev Work
          </a>
   
          <a
            href="#art"
            className={`button ${currentPage === 'Art' ? 'active' : ''}`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              handlePageChange('Art');
            }}
          >
            Sketchbook
          </a>
      
      </ul>
    </nav>
  );
}

export default NavTabs;