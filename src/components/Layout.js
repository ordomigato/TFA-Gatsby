import React from 'react'

import '../styles/style.scss'
import './Layout.scss'
import ThemeContextProvider from '../context/ThemeContext';
import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <div className="site-container">
            <ThemeContextProvider>
                <div className="site-main-container">
                    <Nav />
                    {props.children}
                </div>
                <Footer />
            </ThemeContextProvider>
        </div>
    )
}

export default Layout