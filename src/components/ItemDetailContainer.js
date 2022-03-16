
import React, { useEffect, useState } from 'react';

import ItemDetail from "./ItemDetail";
import { getItem } from '../api/api';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        getItem(itemId)
            .then((res) => {
                console.log("response:"+res);
                setItem(res);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return <>{loading ? <h1 style={{textAlign: 'center', 
                                    fontSize: '20px', 
                                    paddingTop: '40px',
                                    color: 'white'
                                                        }}>Cargando...</h1> : <ItemDetail item={item} />}</>;
};


export default ItemDetailContainer;



