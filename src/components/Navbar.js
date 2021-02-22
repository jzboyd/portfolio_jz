import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

import { animateScroll as scroll } from "react-scroll";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
        
const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
};

const toggleHome = () => {
    scroll.scrollToTop();
}

useEffect(() => {
    showButton();
}, []);

const toggleProjects = () => {
    scroll.scrollTo(900)
}

window.addEventListener('resize', showButton);

    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                <Link to="/" onClick={toggleHome} className="navbar-logo">
                    Joel Zisholtz <i className="fas fa-laptop-code"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-server'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={toggleHome}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' onClick={toggleProjects} smooth={true} duration={500} spy={true} exact='true' offset={-80} className='nav-links'>
                        Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                        Resume
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Contact</Button>}
              </div>
          </nav>
        </>
    )
}

export default Navbar
