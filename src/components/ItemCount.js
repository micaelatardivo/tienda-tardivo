import React, { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
const [counter, SetCounter] = useState (initial);

function resta() {
   if (counter > 1) {
        SetCounter(counter - 1);
   }
}

function suma() {
    if (counter < stock) {
        SetCounter(counter + 1)
    }
}
    return (
        <div>
        <div>
            <button onClick={resta}>-</button>
            <p>{counter}</p>
            <button onClick={suma}>+</button>
        </div>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;