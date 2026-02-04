import React, { JSX, useState } from 'react';
import Home from './pages/Home';
import Work from './pages/Work';
import Art from './pages/Art';
import Header from './Header';
import SplashScreen from './SplashScreen';

type PageType = 'Home' | 'Work' | 'Art';

export default function PortfolioContainer(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<PageType>('Home');
  const [showSplash, setShowSplash] = useState(true);

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

  const handleSplashComplete = (): void => {
    setShowSplash(false);
  };

  // Show splash screen first
  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="portfolio-content">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}