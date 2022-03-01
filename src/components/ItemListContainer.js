import './ItemListContainer.css';

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

export default ItemListContainer; 