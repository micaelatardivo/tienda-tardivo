import './Item.css';
import { Link } from 'react-router-dom'

export default function Item ({ item }) {
    return (
        <div className="item-container">
            <Link to={`/producto/${item.id}`}>
                    <img src={item.pictureUrl} alt="imagen del producto"></img>
                    <div className="detail-container">
                    <p className="item-price">${item.price}</p>
                    <p className="item-title">{item.title}</p>
                    
                    <Link
                    style={{
                        textDecoration: 'none',
                        backgroundColor: 'white',
                        padding: '7px',
                        color: 'black',
                        borderRadius: '10px',
                        border: '1px solid black',
                        fontSize: '12px'
                    }}
                    to={`/producto/${item.id}`}
                >
                    Ver Mas
                </Link>
                </div>
            </Link>
        </div>
    )
}
