import React, { Component } from 'react';
import Clock from './Clock';
import Header from './Header';
import Button from '@material-ui/core/Button';
import { NavLink, Route } from 'react-router-dom';
import About from './About';


export default class Loyaut extends Component {
    render() {
        return (
            <div>
                <Header />

                <nav>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
                <Route path="/about" component={About}/>


                <Clock/>

            </div>
        );
    }
}
