import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartDetail.css';

const CartDetail = ({ producto }) => {
    const { deleteItem } = useContext(CartContext);
    return (
        
        <div className="lista-carrito">
                <img src={producto.pictureUrl} alt={producto.title} className="picture" />
                        <h4> {producto.title}</h4>
                        <h4> Cantidad: {producto.cantidad}</h4>
                        <h4> Precio: ${producto.price}</h4>
                        <h4> Total: ${producto.price * producto.cantidad}</h4>

                    <button className="button3" onClick={() => deleteItem(producto.id)}>
                        X
                    </button>
        </div>
    );
};

export default CartDetail;