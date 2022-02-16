import React, { useState } from 'react';


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