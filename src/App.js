import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/resume' component={Resume} />
      <Route path='/contact' component={Contact} />
    </Switch>
    </Router>
   
    </>
  );
}

export default App;
