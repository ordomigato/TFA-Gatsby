import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
// import { slide as Menu } from 'react-burger-menu'
import { ThemeContext } from '../context/ThemeContext';
import useDocumentScrollThrottled from './utils/useDocumentScrollThrottled';
import './Nav.scss';

const Nav = () => {

    const ctx = useContext(ThemeContext)
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    
        setShouldShowShadow(currentScrollTop > 2);
    
        setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (
        <header className="navbar-container">
            {/* MOBILE NAVBAR */}

            <div class="menu-wrap">
                <input type="checkbox" class="toggler"></input>
                <div class="hamburger"><div></div></div>
                <div class="menu">
                    <div>
                        <div>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/shop'>Shop</Link></li>
                                <li><Link to='/news'>News</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Menu
                className="menu"
                right
                width={ '50vw' }
                disableAutoFocus
                isOpen={ctx.isMenuOpen}
                onStateChange={(state) => ctx.stateChangeHandler(state)}
            >
                <Link to='/' onClick={ctx.toggleMenu}>
                    Home
                </Link>
                <Link to='/shop' onClick={ctx.toggleMenu}>
                    Shop
                </Link>
                <Link to='/news' onClick={ctx.toggleMenu}>
                    news
                </Link>
            </Menu> */}

            {/* DESKTOP NAVBAR */}
            <nav className={`navbar desktop-nav ${hiddenStyle} ${shadowStyle}`}>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link to='/' className="navbar-item" activeClassName="active-navbar-item">
                            Home
                        </Link>
                        <Link to='/shop' className="navbar-item" activeClassName="active-navbar-item">
                            Shop
                        </Link>
                        <Link to='/news' className="navbar-item" activeClassName="active-navbar-item">
                            news
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;