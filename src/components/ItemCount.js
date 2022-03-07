import React, { useContext, useState } from 'react';
import { MessageContext } from '../context/MessageContext';

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
        
        <div >
            <div >
                <button onClick={resta}>-</button>
                <p>{itemCounter}</p>
                <button onClick={suma}>+</button>
            </div>
            <div>
                <button disabled={itemCounter === 0} className={itemCounter === 0 ? 'disabled' : 'add'}
                    onClick={addToCart}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;


/*import React, { useState } from 'react';


const ItemCount = ({stock, initial, onAdd}) => {
const [itemCounter, SetitemCounter] = useState (initial);

function resta(event) {
    console.log(event);
    if (itemCounter > 1) {
        SetitemCounter(itemCounter - 1);
   }
}

function suma() {
    if (itemCounter < stock) {
        SetitemCounter(itemCounter + 1)
    }
}

function addToCart(){
    onAdd(itemCounter);
}


    return (
        <div>
        <div>
            <button onClick={resta}>-</button>
            <p>{itemCounter}</p>
            <button onClick={suma}>+</button>
        </div>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;

*/

