import React from 'react';
import NavTabs from './NavTabs'

function Header(props) {
    
    return (
        <div>
        <h1 className='m-4'>Dan R.</h1>
        <NavTabs currentPage ={props.currentPage} handlePageChange={props.handlePageChange}  />
        </div>
    )
} 

export default Header;