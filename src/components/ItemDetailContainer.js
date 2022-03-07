
import React, { useEffect, useState } from 'react';

import ItemDetail from "./ItemDetail";
import { getItems } from '../api/api';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        getItems(itemId)
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return <>{loading ? <h1>Cargando...</h1> : <ItemDetail item={item} />}</>;
};


export default ItemDetailContainer;




/* import { useParams } from 'react-router-dom';
import { doc, getDoc  } from 'firebase/firestore';
import { db } from '../firebase';

export default function ItemDetailContainer () {

    const [item, setItem] = useState();
    const { itemId } = useParams();

    useEffect( () => {

        const itemRef = doc(db,"items", itemId);
        getDoc(itemRef)

    .then((snapshot) => {

        if(snapshot.exists()) {
            setItem( { id: snapshot.id, ...snapshot.data()} )
        }
    })
    .catch(error => {
        console.log(error)
    })

    }, [ itemId ]);

    return (
        <div>
            {!item ? <p>Cargando...</p> : <ItemDetail item={item} />}
        </div>
    )
};

*/


