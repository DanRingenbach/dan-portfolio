import React from 'react';
import NavTabs from './NavTabs'

function Header(props) {
    
    return (
        <>
        <h1 className='m-4'>Dan Ringenbach</h1>
        <NavTabs currentPage ={props.currentPage} handlePageChange={props.handlePageChange}  />
        </>
    )
} 

export default Header;