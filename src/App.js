import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Howdy from './components/howdy/howdy';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact.js';

function App() {
  return (
    
    <div className="App">
        <Welcome name="Bob" />
        {/* <Howdy name="Robert" /> */}
        <Clock />
        <Contact />
    </div>
  );
}

export default App;
