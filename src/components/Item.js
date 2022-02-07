import './Item.css';

export default function Item ({item}) {
    return (
        <div>
            <img src={item.pictureUrl} alt="imagen del producto"></img>
            <p>{item.price}</p>
            <p>{item.title}</p>
        </div>
    )
}
