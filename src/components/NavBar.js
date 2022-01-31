import './NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <div className="container">
            <h1>CUARTO SET</h1>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Mayorista</li>
                    <li><CartWidget /></li>
                </ul>
                
        </div>
    );
}

export default NavBar; 
