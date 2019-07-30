import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Howdy(props) {
    return (
        <div className="Howdy">
            Howdy, {props.name}!
        </div>
    );
}

export default Howdy;