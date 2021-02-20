import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';


function MainSection() {
    return (
        <div className='main-container'>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>Full-Stack Software Engineer</h1>
            <p>JOEL ZISHOLTZ</p>
            <div className="main-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                   PORTFOLIO 
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                >RESUME</Button>
            </div>
        </div>
    )
}

export default MainSection
