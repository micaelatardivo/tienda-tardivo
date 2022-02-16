import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemDetail ( { item }) {

    const [ itemCount , setItemCount] = useState (undefined);

    function onAdd (newItemCount) {
        console.log (newItemCount);
        setItemCount(newItemCount);
    }

    return (
        <div>
                <div>
                    <img src={item.pictureUrl} alt="imagen del producto"></img>
                    <p>{item.price}</p>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>

                <div>
                { 
                    !itemCount ?
                    <ItemCount stock={5} initial={1} onAdd={onAdd} /> :
                    <Link to="/cart">Finalizar compra</Link>
                }
                </div>
        </div>

    )
}