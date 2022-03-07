import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartDetail = ({ producto }) => {
    const { deleteItem } = useContext(CartContext);
    return (
        <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                border: '1px solid black',
                padding: '10px',   
            }}>
                <img src={producto.img} alt={producto.name} width={60} />
                        <h4> Producto: {producto.name}</h4>
                        <h4> Cantidad: {producto.cantidad}</h4>
                        <h4> Precio: ${producto.price}</h4>
                        <h4> Total: ${producto.price * producto.cantidad}</h4>

                    <button style={{
                                backgroundColor: 'red',
                                border: 'none',
                                color: 'white',
                                borderRadius: '10px',
                                padding: '3px 12px',
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