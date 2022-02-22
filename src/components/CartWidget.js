import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartWidget.css';


function CartWidget() {

    const {cart, vaciarCarrito} = useContext(CartContext)

    return (
        <div>
            <div className="cart">
                <i className="fas fa-shopping-cart"></i>
            </div>
            <div>
                {cart.map ((producto) => (
                    <div key={producto.id}>
                        <h3>{producto.title}</h3> 
                    </div>
                ))}
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        </div>
    );
}

export default CartWidget; 