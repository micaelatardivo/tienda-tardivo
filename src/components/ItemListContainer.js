/*import './ItemListContainer.css';

import ItemCount from './ItemCount';
import ItemList from './ItemList';

import { useEffect , useState } from 'react';
import { getItems } from '../api/api';
import { useParams } from 'react-router-dom';


function ItemListContainer({greeting}) {

    const [itemsList, setItemsList] = useState([]);
    const { categoryName } = useParams();

    useEffect (() => {
        getItems().then((items) => {
            if (!categoryName) {
                setItemsList(items);
            } else {
            const itemCategory = items.filter((item) => {
                return item.category === categoryName;
            })

            setItemsList(itemCategory);
        }
        }).catch((error) => {
            console.log(error);
        });
    }, [categoryName]);


    function onAdd(ItemCount) {
        console.log(ItemCount);
    }

    return (
        <div className="container-item">
            <p> {greeting} </p>

            { 
            itemsList.length === 0 ? 
            
            <p>Cargando...</p> :
            <ItemList items={itemsList}/>
            }

            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
    
}


export default ItemListContainer; */

import React, { useEffect, useState } from 'react';
import { getItems } from '../api/api';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [itemsList, setItemsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryName } = useParams();

    //tarea pesada
    useEffect(() => {
        getItems(categoryName)
            .then((res) => {
                setItemsList(res);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                //otra accion
                setLoading(false);
            });

        return () => {
            setItemsList([]);
            setLoading(true);
        };
    }, [categoryName]);

    //console.log(items);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <h2 style={{ textAlign: 'center' }}>{greeting}</h2>
                    <ItemList items={itemsList} />
                </>
            )}
        </div>
    );
};

export default ItemListContainer;