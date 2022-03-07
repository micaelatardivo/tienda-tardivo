import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';


export default function NavBar() {
    return (
        <nav className="container">
            <Link to="/"> <h1>CUARTO SET</h1> </Link>
                <ul>
                    <li><NavLink to="/category/paletas"> Paletas </NavLink></li>
                    <li><NavLink to="/category/accesorios"> Accesorios </NavLink></li>
                    <li><NavLink to="/category/bolsos"> Bolsos </NavLink></li>
                </ul>
            <div>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
                
        </nav> 
    )}