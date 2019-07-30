import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className='Clock'>
               <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;