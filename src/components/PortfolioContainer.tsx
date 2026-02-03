import React, { JSX, useState } from 'react';
import Home from './pages/Home';
import Work from './pages/Work';
import Art from './pages/Art';
import Header from './Header';

type PageType = 'Home' | 'Work' | 'Art';

export default function PortfolioContainer(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<PageType>('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = (): JSX.Element | null => {
    if (currentPage === 'Home') {
      return <Home />;
    }

    if (currentPage === 'Work') {
      return <Work />;
    }

    if (currentPage === 'Art') {
      return <Art />;
    }
    
    return null;
  };

  const handlePageChange = (page: string): void => {
    if (page === 'Home' || page === 'Work' || page === 'Art') {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}