import React from 'react';

import { AiOutlineShoppingCart} from 'react-icons/ai';
// import { Link } from 'react-router-dom';


export default function CartWidget () {
    return <AiOutlineShoppingCart fontSize="24px" />
    
}






/* import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';
import './CartWidget.css';


 function CartWidget() {

    const {cart, vaciarCarrito, deleteItem} = useContext(CartContext);

    return (
        
        <>
            {cart.lenght === 0 ? (
                <>
                    <h2>Aún no hay productos</h2>
                    <Link to="/">Home</Link>
                </>
            ) : (
            <>
                {cart.map ((producto) => (
                    <div key={producto.id}>
                        <h3>{producto.title}</h3>
                        <h3>{producto.cantidad}</h3>
                        <button onClick={() => deleteItem (producto.id)}>
                            X </button> 
                    </div>
                ))}
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
            </>
        )}
        </>
    );
} */
