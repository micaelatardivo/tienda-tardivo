import React, { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
const [counter, SetCounter] = useState (initial);

function resta() {
    SetCounter(counter - 1)
}

function suma() {
    SetCounter(counter + 1)
}
    return (
        <div>
            <p>{counter}</p>
            <button onClick={resta}>-</button>
            <button onClick={suma}>+</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;