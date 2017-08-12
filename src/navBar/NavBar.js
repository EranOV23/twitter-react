import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

export default class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <ul className="container nav-list">
                    <li><img src="http://2015.uxsalon.com/wp-content/uploads/2015/01/netc_logo.png" alt="Netcraft logo"/></li>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/contact us" activeClassName="active">Contact us</NavLink></li>
                    <li>Phone: 03-33333333</li>
                </ul>
            </div>
        )
    }
}
