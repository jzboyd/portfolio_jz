import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';
import { animateScroll as scroll } from "react-scroll";
import engineer from '../images/engineer.png';
import profile from "../images/profilepic.jpeg";


const toggleProjects = () => {
    scroll.scrollTo(3700)
}

const toggleFrontend = () => {
    scroll.scrollTo(3700)
}

const toggleBackend = () => {
    scroll.scrollTo(3700)
}

const toggleMobile = () => {
    scroll.scrollTo(3700)
}

function MainSection() {
    return (
        <div className='main-container'>
            <div className='info-container'>
            <h1>Software Engineer</h1>
            <p>Joel Zisholtz</p>
            <img src={profile} alt="profile-pic" />
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
            <div className="sub-btns">
                <Button 
                onClick={toggleFrontend}
                className='btn' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >Front-End</Button>
                <Button 
                onClick={toggleBackend}
                className='btn' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >Back-End</Button>
                <Button 
                onClick={toggleMobile}
                className='btn' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >Mobile</Button>
            </div>
         
           
           
          </div>
          <div class="first-img">
                <img src={engineer} alt="engineer" />
              </div>
        </div>
    )
}

export default MainSection
