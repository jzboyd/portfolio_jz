import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';
import { animateScroll as scroll } from "react-scroll";
import engineer from '../images/engineer.png';


const toggleProjects = () => {
    scroll.scrollTo(2975)
}

function MainSection() {
    return (
        <div className='main-container'>
            <div className='info-container'>
            <h1>Software Engineer</h1>
            <p>Joel Zisholtz</p>
            
            <div className="main-btns">
                <Button 
                onClick={toggleProjects}
                className='btn' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                Projects 
                </Button>
                <Button 
                className='btn' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                >Resume</Button>
            </div>
            <div class='main-social-icons'>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/joelzisholtz/"
                class="main-social-icon-link linkedin"
                aria-label="LinkedIn"
                >
                  <i class="fab fa-linkedin" />
              </a> 
            <a
                target="_blank"
                href="https://github.com/jzboyd"
                class="main-social-icon-link github"
                aria-label="Github"
                >
                  <i class="fab fa-github" />
              </a>
            
          </div>
          </div>
          <div class="first-img">
                <img src={engineer} alt="engineer" />
              </div>
        </div>
    )
}

export default MainSection
