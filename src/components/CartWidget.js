import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <AiOutlineShoppingCart size={28}/>
            <p>{totalUnidades()}</p>
        </div>
    );
};

export default CartWidget;








