import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartDetail = ({ producto }) => {
    const { deleteItem } = useContext(CartContext);
    return (
        <div>
            <img src={producto.pictureUrl} alt={producto.title} width={60} />
            <h4>Producto: {producto.title}</h4>
            <h4> Cantidad: {producto.cantidad}</h4>
            <h4> Precio: ${producto.price}</h4>
            <h4> Total: ${producto.price * producto.cantidad}</h4>
            <button
                style={{
                    backgroundColor: 'red',
                    border: 'none',
                    color: 'white',
                    borderRadius: '10px',
                    padding: '3px 10px',
                    cursor: 'pointer',
                }}
                onClick={() => deleteItem(producto.id)}
            >
                X
            </button>
        </div>
    );
};

export default CartDetail;