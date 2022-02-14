import './ItemList.css';
import Item from './Item';

export default function ItemList ({ items }) {
    return (
        <div className="item-list-container">
            {
                items.map ( function (item){
                    return (
                        <Item key={item.id} item={item} />
                    )
                })
            }
        </div>
    );
}
