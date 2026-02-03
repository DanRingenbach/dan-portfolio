import React, { JSX } from 'react';

interface NavTabsProps {
  currentPage: string;
  handlePageChange: (page: string) => void;
}

function NavTabs({ currentPage, handlePageChange }: NavTabsProps): JSX.Element {
  return (
    <nav>
      <ul>
        <li>
          <a 
            href="#home" 
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { 
              e.preventDefault(); 
              handlePageChange('Home'); 
            }}
            
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#work" 
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { 
              e.preventDefault(); 
              handlePageChange('Work'); 
            }}
          
          >
            Web Dev Work
          </a>
        </li>
         <li>
          <a 
            href="#art" 
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { 
              e.preventDefault(); 
              handlePageChange('Art'); 
            }}
          
          >
           Sketchbook
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;