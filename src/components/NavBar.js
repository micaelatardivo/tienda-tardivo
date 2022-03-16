import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';
import logo from '../img/logo1.jpeg'


export default function NavBar() {
    return (
        <nav className="container">
            <Link to="/"> <img src= {logo} alt="logo cuarto set" width={65}/> </Link>
                <ul>
                    <li><NavLink to="/category/Paletas"> Paletas </NavLink></li>
                    <li><NavLink to="/category/Accesorios"> Accesorios </NavLink></li>
                    <li><NavLink to="/category/Bolsos"> Bolsos </NavLink></li>
                </ul>
            <div>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
                
        </nav> 
    )}