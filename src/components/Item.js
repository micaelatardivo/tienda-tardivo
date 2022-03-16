import './Item.css';
import { Link } from 'react-router-dom'

export default function Item ({ item }) {
    return (
        <div className="item-container">
            <Link to={`/producto/${item.id}`}>
                
                    <img src={item.pictureUrl} alt="imagen del producto"></img>

                            <div className="detail-container">
                                <p className="item-title">{item.title}</p>
                                <p className="item-price">${item.price}</p>

                                <button className="btn"><Link to={`/producto/${item.id}`}> Ver Más</Link></button>
                            </div>
            </Link>
        </div>
    )
}
