import './ItemListContainer.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect , useState } from 'react';
import { getItems } from '../api/api';


function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([]);

    useEffect (() => {
        getItems().then(function (products) {
            console.log(products);
            setProducts(products);
        });
    }, []);

    function onAdd() {
        alert("se agrego tu producto");
    }

    return (
        <div className="container-item">
            <p>Bienvenidos a  {greeting} </p>
            { products.length > 0 ? <ItemList products={products} /> : <p>Cargando...</p>}
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
    
}

export default ItemListContainer; 