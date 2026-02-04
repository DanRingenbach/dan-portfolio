import { JSX, useState, useEffect } from 'react';
import NavTabs from './NavTabs';
import styles from './Header.module.scss';

interface HeaderProps {
  currentPage: string;
  handlePageChange: (page: string) => void;
}

function Header(props: HeaderProps): JSX.Element {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Only collapse on mobile screens
            if (window.innerWidth <= 768) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolling down and past 100px
                    setIsCollapsed(true);
                } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
                    // Scrolling up or near top
                    setIsCollapsed(false);
                }
            } else {
                // Always show on desktop
                setIsCollapsed(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`${styles.header} ${isCollapsed ? styles.collapsed : ''}`}>
            <h1 className={styles.logo}>Dan Ringenbach</h1>
            <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
        </div>
    );
} 

export default Header;