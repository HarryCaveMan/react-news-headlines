import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';

export default class Main extends Component {

    render(){
        return (
            <div className="content-main">
                
                    <Home />
    
            </div>
        )
    }
};