import React from 'react';
import { Nav } from 'react-bootstrap';



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
    
      <Nav  variant="tabs" defaultActiveKey={"#home"} className="justify-content-left">
        <Nav.Item>
          <Nav.Link ml-5 href="#home" onClick={() => handlePageChange('Home')}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#work" onClick={() => handlePageChange('Work')} >Work</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link href='#contact' onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
        </Nav.Item> */}
      </Nav>
      </>
  );
}

export default NavTabs;

