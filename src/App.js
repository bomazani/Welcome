import React from 'react';
import { Route } from "react-router-dom";

import './App.css';
import Welcome from './components/welcome/Welcome';
import Howdy from './components/howdy/howdy';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact.js';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    
    <div className="App">
        <Navigation />
        {/* <Welcome name="Bob" /> */}
        <Route
          exact 
          path="/" 
          render={(props) => <Welcome {...props} name='Bob' />} 
        />
        {/* <Howdy name="Robert" /> */}
        {/* <Clock /> */}
        <Route path="/clock" component={Clock} />
        {/* <Contact /> */}
        <Route path='/contact' component={Contact} />
    </div>
  );
}

export default App;
