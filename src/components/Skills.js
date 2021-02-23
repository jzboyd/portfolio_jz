import React from "react";
import frontend from "../images/front-end.png";
import backend from "../images/back-end.png";
import mobile from "../images/mobile.png";
import "./Skills.css";

function Skills() {
  return (
    <>
      <div className="skills-header">
        <h1>Development Skills</h1>
      </div>
      {/* <div className='skills-container'> */}

      <div className="skills-frontend">
        <div className="frontend-header">
        <h2>Front-End Development</h2>
        </div>
        
        <div className="frontend-img-language">
          <div class="frontend-img">
            <img src={frontend} alt="front-end" />
          </div>

          <div className="frontend-languages">
            <i class="devicon-javascript-plain colored">Javascript</i>
            <i class="devicon-html5-plain-wordmark colored">HTML</i>

            <i class="devicon-css3-plain-wordmark colored">CSS</i>

            <i class="devicon-react-original-wordmark colored">React</i>
            <i class="devicon-redux-original colored">Redux</i>

            <i class="devicon-jquery-plain-wordmark colored">jQUERY</i>
            <i class="devicon-bootstrap-plain-wordmark colored">BOOTSTRAP</i>
            <i class="devicon-illustrator-plain colored">Adobe illustrator</i>
          </div>   

        </div>
      </div>
   
      <div className="skills-backend">
      <div className="backend-header">
        <h2>Back-End Development</h2>
        </div>
        <div className="backend-img-language">
        <div class="backend-img">
          <img src={backend} alt="back-end" />
        </div>
        <div className="backend-languages">
          <i class="devicon-ruby-plain-wordmark colored">Ruby</i>
          <i class="devicon-python-plain-wordmark colored">python</i>
          <i class="devicon-rails-plain-wordmark colored">Rails</i>
          <i class="devicon-django-plain-wordmark colored">django</i>
          <i class="devicon-express-original-wordmark colored">express</i>
          <i class="devicon-nodejs-plain-wordmark colored">nodeJS</i>
          <i class="devicon-postgresql-plain-wordmark colored">PostgreSQL</i>
          <i class="devicon-mongodb-plain-wordmark colored">mongoDB</i>
          <i class="devicon-firebase-plain-wordmark colored">Firebase</i>
          <i class="devicon-heroku-original-wordmark colored">heroku</i>
        </div>
      </div>
      </div>
      <div className="skills-mobile">
      <div className="mobile-header">
      <h2>Mobile Development</h2>
        </div>
        <div className="mobile-img-language">
        <div class="mobile-img">
          <img src={mobile} alt="mobile" />
        </div>
        <div className="mobile-languages">
        <i class="devicon-react-original-wordmark colored">React Native</i>
          <i class="devicon-redux-original colored">Redux</i>
          <i class="devicon-javascript-plain colored">Javascript</i>
          <i class="devicon-python-plain-wordmark colored">python</i>
          <i class="devicon-django-plain-wordmark colored">django</i>
          <i class="devicon-postgresql-plain-wordmark colored">PostgreSQL</i>
          <i class="devicon-firebase-plain-wordmark colored">Firebase</i>
        </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default Skills;
