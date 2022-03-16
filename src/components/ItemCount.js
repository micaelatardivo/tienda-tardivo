import React, { useContext, useState } from 'react';
import { MessageContext } from '../context/MessageContext';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const { handleMessage } = useContext(MessageContext);
    const [itemCounter, SetitemCounter] = useState (1);

    const suma = () => {
        itemCounter < stock
                    ? SetitemCounter (itemCounter + 1)
                    : handleMessage ('Máximo stock', 'warning');
    };

    const resta = () => {
        itemCounter > initial 
                    && SetitemCounter(itemCounter - 1);
    };

    const addToCart = () => {
        onAdd(itemCounter);
    };

    
    return (
        
        <div>
            <div className="button">
                <button className="button2" onClick={resta}>-</button>
                    <p>{itemCounter}</p>
                <button className="button2" onClick={suma}>+</button>
            </div>
            <div>
                <button disabled={itemCounter === 0} className={itemCounter === 0 ? 'disabled' : 'add'}
                    onClick={addToCart} className="">

                    Agregar al carrito

                </button>
            </div>
        </div>
    );
};

export default ItemCount;
