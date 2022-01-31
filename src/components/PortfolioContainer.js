import React, { useState } from 'react';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Header from './Header'
import Footer from './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    
    if (currentPage === 'Work') {
      return <Work />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
