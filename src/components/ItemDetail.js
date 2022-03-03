import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ItemDetail ( { item }) {

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