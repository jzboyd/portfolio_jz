import React from 'react'
import frontend from '../images/front-end.png';
import backend from '../images/back-end.png';
import mobile from '../images/mobile.png';
import './Skills.css';


function Skills() {
    return (
        <div className='skills-container'>
            <h1>Skills</h1>
            <div className='skills-frontend'>
                <h2>Front-End UX/UI Development</h2>
            <div class="frontend-img">
                <img src={frontend} alt="front-end" />
              </div>
              <div className="languages">
              <i class="devicon-javascript-plain colored"></i>
              <i class="devicon-html5-plain-wordmark colored"></i>
              
              <i class="devicon-css3-plain-wordmark colored"></i>

              <i class="devicon-react-original-wordmark colored"></i>
              <i class="devicon-redux-original colored"></i>

              <i class="devicon-jquery-plain-wordmark colored"></i>
              <i class="devicon-bootstrap-plain-wordmark colored"></i>
              <i class="devicon-illustrator-line colored"></i>

              </div>
            </div>
            <div className='skills-backend'>
            <h2>Back-End Development</h2>
            <div class="backend-img">
                <img src={backend} alt="back-end" />
              </div>
              <div className='languages'>
              <i class="devicon-ruby-plain-wordmark colored"></i>
              <i class="devicon-rails-plain-wordmark colored"></i>
              <i class="devicon-express-original-wordmark colored"></i>
              <i class="devicon-django-plain-wordmark colored"></i>

              <i class="devicon-mongodb-plain-wordmark colored"></i>

              <i class="devicon-nodejs-plain-wordmark colored"></i>

              <i class="devicon-postgresql-plain-wordmark colored"></i>

              <i class="devicon-python-plain-wordmark colored"></i>
              <i class="devicon-heroku-original-wordmark colored"></i>
              <i class="devicon-firebase-plain-wordmark colored"></i>


              </div>
            </div>
            <div className='skills-mobile'>
                <h2>Mobile Development</h2>
            <div class="mobile-img">
                <img src={mobile} alt="mobile" />
              </div>
              <div className='languages'>
              <i class="devicon-javascript-plain colored"></i>
              <i class="devicon-html5-plain-wordmark colored"></i>
             
              <i class="devicon-css3-plain-wordmark colored"></i>

              <i class="devicon-react-original-wordmark colored"></i>
              <i class="devicon-redux-original colored"></i>

              <i class="devicon-jquery-plain-wordmark colored"></i>
              <i class="devicon-ruby-plain-wordmark colored"></i>
              <i class="devicon-rails-plain-wordmark colored"></i>
              <i class="devicon-express-original-wordmark colored"></i>
              <i class="devicon-django-plain-wordmark colored"></i>

              <i class="devicon-mongodb-plain-wordmark colored"></i>

              <i class="devicon-nodejs-plain-wordmark colored"></i>

              <i class="devicon-postgresql-plain-wordmark colored"></i>

              <i class="devicon-python-plain-wordmark colored"></i>
              <i class="devicon-heroku-original-wordmark colored"></i>
              <i class="devicon-firebase-plain-wordmark colored"></i>


              </div>
            </div>
            
            </div>
        
    )
}

export default Skills
