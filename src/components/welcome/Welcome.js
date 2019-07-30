import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Welcome(props) {
    return (
        <div className="Welcome">
            Welcome, {props.name}!   
        </div>
    );
}

export default Welcome;