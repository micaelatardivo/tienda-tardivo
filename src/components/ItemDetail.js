import ItemCount from "./ItemCount";
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { MessageContext } from "../context/MessageContext";

const ItemDetail = ({ item }) => {
    const [ itemCount , setItemCount] = useState (false);
    
    
    const { addToCart } = useContext(CartContext);
    const { handleMessage } = useContext(MessageContext);

    const onAdd = (cantidad) => {
        setItemCount(true);

        addToCart (cantidad, item);
        handleMessage('Productos cargados con éxito', 'succes');
    };

    return (
        <div className="container-detail">
            <div className="container-img">
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div style={{ width: '150px' }}>
                <h2>{item.title}</h2>
                <h2>{item.price}</h2>
                {itemCount ? (
                    <>
                        <Link to="/cart">Ir al carrito</Link>
                    </>
                ) : (
                    <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                )}
            </div>
        </div>
    );
};

export default ItemDetail;

/* export default function ItemDetail ( { item }) {

    const [ itemCount , setItemCount] = useState (false);
    const {addToCart, cart} = useContext (CartContext)

    const onAdd = (cantidad) => {
        setItemCount(true);

        addToCart (cantidad, item);
    };

    console.log (cart);

    return (
        <div>
                <div>
                    <img src={item.pictureUrl} alt="imagen del producto"></img>
                    <p>{item.price}</p>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>

                <div>
                { itemCount ? (
                    <Link to="/cart">Ir al carrito</Link>
                ) : (
                    <ItemCount stock={5} initial={1} onAdd={onAdd} /> 
                )}
                </div>
        </div>

    )
    
}

*/