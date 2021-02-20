import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure newsletter
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Me</h2>
                        <Link to='/sign-up'>Contact Me</Link>
                        <Link to='/sign-up'>Contact Me</Link>
                        <Link to='/sign-up'>Contact Me</Link>
                        <Link to='/sign-up'>Contact Me</Link>
                    </div>
                   
                    <div class='footer-link-items'>
                        <h2>Links</h2>
                        <Link to='/'>LinkedIn</Link>
                        <Link to='/'>Github</Link>
                    </div>
                    
                </div>
            </div>
            <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
           
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>© 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <a
                target="_blank"
                href="https://github.com/jzboyd"
                class="social-icon-link github"
                aria-label="Github"
                >
                  <i class="fab fa-github" />
              </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/joelzisholtz/"
                class="social-icon-link linkedin"
                aria-label="LinkedIn"
                >
                  <i class="fab fa-linkedin" />
              </a>
          </div>
        </div>
      </section>
        </div>
    
    )
}

export default Footer
