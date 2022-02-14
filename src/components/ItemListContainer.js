import './ItemListContainer.css';

import ItemCount from './ItemCount';
import ItemList from './ItemList';

import { useEffect , useState } from 'react';
import { getItems } from '../api/api';


function ItemListContainer({greeting}) {

    const [itemsList, setItemsList] = useState([]);

    useEffect (() => {
        getItems().then((items) => {
            setItemsList(items);

        }).catch((error) => {
            console.log(error);
        });
    }, []);

    function onAdd(ItemCount) {
        console.log(ItemCount);
    }

    return (
        <div className="container-item">
            <p>Bienvenidos a  {greeting} </p>

            { 
            itemsList.length === 0 ? 
            
            <p>Cargando...</p> :
            <ItemList items={itemsList}/>
            }

            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
    
}

export default ItemListContainer; 