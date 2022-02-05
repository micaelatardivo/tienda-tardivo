import './ItemListContainer.css';
import ItemCount from './ItemCount';



function ItemListContainer({greeting}) {

    function onAdd() {
        alert("se agrego tu producto");
    }

    return (
        <div className="container-item">
            <p>Hola, {greeting} </p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
    
}

export default ItemListContainer; 