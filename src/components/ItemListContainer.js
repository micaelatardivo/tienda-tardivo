import React, { useEffect, useState } from 'react';
import { getItems } from '../api/api';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [itemsList, setItemsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryName } = useParams();

    useEffect(() => {
        getItems(categoryName)
            .then((res) => {
                setItemsList(res);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            setItemsList([]);
            setLoading(true);
        };
    }, [categoryName]);


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
                <h1 style={{fontSize: '20px', paddingTop: '40px', color: 'white'}}>Cargando...</h1>
            ) : (
                <>
                    <h2 style={{textAlign: 'center', 
                                fontSize: '20px', 
                                paddingTop: '40px',
                                paddingBottom: '30px',
                                color: 'white'
                                                    }}>{greeting}</h2>
                    <ItemList items={itemsList} />
                </>
            )}
        </div>
    );
};

export default ItemListContainer;






