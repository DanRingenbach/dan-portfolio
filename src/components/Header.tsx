import { JSX } from 'react';
import NavTabs from './NavTabs';

interface HeaderProps {
  currentPage: string;
  handlePageChange: (page: string) => void;
}

function Header(props: HeaderProps): JSX.Element {
    return (
        <div>
            <h1>Dan R.</h1>
            <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
        </div>
    );
} 

export default Header;