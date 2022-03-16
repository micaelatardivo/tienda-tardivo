import ItemCount from "./ItemCount";
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import './ItemDetail.css';


const ItemDetail = ({ item }) => {
    const [ itemCount , setItemCount] = useState (false);
    
    
    const { addToCart } = useContext(CartContext);
    

    const onAdd = (cantidad) => {
        setItemCount(true);
        addToCart (cantidad, item);
        
    };

    return (
        
        <div className="container container-detail">
            <div className="row">
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className="col-md-5 container-text" >
                <h2 className="category text-center">{item.category}</h2>
                <h2>{item.title}</h2>
                <h2 className="price">${item.price}</h2>
                <h2 className="description">{item.description}</h2>
                
                
                {itemCount ? (
                    <>
                        <Link to="/cart" className="tocart">Ir al carrito</Link>
                    </>
                ) : (
                    <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
