import './Item.css';

export default function Item ({item}) {
    return (
        <div className="item-container">
            <img src={item.pictureUrl} alt="imagen del producto"></img>
            <div className="detail-container">
                <p className="item-price">{item.price}</p>
                <p className="item-title">{item.title}</p>
            </div>
        </div>
    )
}
