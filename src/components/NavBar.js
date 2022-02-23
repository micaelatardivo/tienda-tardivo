import './NavBar.css';

import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="container">
            <Link to="/">
            <h1>CUARTO SET</h1>
            </Link>
                <ul>
                    <li><NavLink to="/category/paletas"> Paletas </NavLink></li>
                    <li><NavLink to="/category/accesorios"> Accesorios </NavLink></li>
                    <li><NavLink to="/category/bolsos"> Bolsos </NavLink></li>
                    <li> <NavLink to="/src/components/CartWidget.js">
                    <i className="fas fa-shopping-cart"></i>
                        </NavLink>
                    </li>
                </ul>
                
        </div>
    );
}

export default NavBar; 
