import './ItemListContainer.css';

function ItemListContainer({greeting}) {
    return (
        <div className="container-item">
            <p>Hola este es mi {greeting} </p>
        </div>
    )
    
}

export default ItemListContainer; 