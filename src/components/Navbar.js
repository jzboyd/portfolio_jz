import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';



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

useEffect(() => {
    showButton();
}, []);

window.addEventListener('resize', showButton);

    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Joel Zisholtz <i className="fas fa-code"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-server'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
                        Skills
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
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
