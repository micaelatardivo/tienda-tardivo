import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartDetail from './CartDetail';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Cart = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);
    const { cart, vaciarCarrito, totalCart } = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const newOrder = {
            date: new Date(),
            buyer: { email, name },
            items: cart,
            total: totalCart(),
        };
        addDoc(collection(db, 'orders'), newOrder)
            .then((res) => {
                setOrderId(res.id);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
                vaciarCarrito();
            });
    };

    if (orderId !== '') {
        return <h2>Este es el Id de tu orden de compra: {orderId}</h2>;
    }
    return (
        <>
            {cart.length === 0 ? (
                <>
                    <h2>Aún no hay productos, volvé al home</h2>
                    <Link to="/">Home</Link>
                </>
            ) : (
                <>
                    <div>
                        <div
                        >
                            {cart.map((producto) => (
                                <CartDetail
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))}
                            
                        </div>
                        <div style={{ maxWidth: '40%' }}>
                            <h2 style={{ textAlign: 'center' }}>
                                Finalizá tu compra completando el formulario
                            </h2>
                            <form
                                onSubmit={handleSubmit}
                                action=""
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    style={{ margin: '10px' }}
                                    type="text"
                                    placeholder="Nombre"
                                />
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    style={{ margin: '10px' }}
                                    type="email"
                                    placeholder="Email"
                                />
                                <button>
                                    {loading
                                        ? 'Generando orden....'
                                        : 'Finalizar compra'}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            marginLeft: '20px',
                            marginTop: '10px',
                        }}
                    >
                        <button onClick={vaciarCarrito}>Vaciar carrito</button>
                        <p> Total: $ {totalCart()} </p>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;



















/*import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';



export default function Cart() {

    const {cart, vaciarCarrito, deleteItem} = useContext(CartContext);

    return (
        
        <>
            {cart.length === 0 ? (
                <>
                    <h2>Aún no hay productos</h2>
                    <Link to="/">Home</Link>
                </>
            ) : (
            <>
                {cart.map ((producto) => (
                    <div key={producto.id}>
                        <h3>{producto.title}</h3>
                        <img src={producto.pictureUrl}/>
                        <h3>Cantidad: {producto.cantidad}</h3>
                        <h3>${producto.price * producto.cantidad}</h3>
                        
                        
                        <button onClick={() => deleteItem (producto.id)}> X </button> 
                    </div>
                ))}
                
                
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
                
            </>
        )}
        </>
    );
}
/*

/* Cada vez que se modifica el carrito, actualizamos la cantidad de productos 
  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);





/* carrito
  <div>
      <img src={item.img}/>
      <div>
        <div>
          <p>{producto.cantidad}</p>
          <div>
            <button onClick={() => AddItemToCart(item)}> AGREGAR </button>
            <button onClick={() => DeleteItemToCart(id)}> SACAR </button>
          </div>
        </div>
        <div>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>



*/