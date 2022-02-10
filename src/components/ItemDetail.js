

export default function ItemDetail ( { item }) {
    return (
        <div>
            <img src={item.pictureUrl} alt="imagen del producto"></img>
            <p>{item.price}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
        </div>
    )
}