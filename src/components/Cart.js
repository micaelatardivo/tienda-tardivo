import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartDetail from './CartDetail';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import './Cart.css';

const Cart = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);
    const { cart, vaciarCarrito, totalCart } = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const newOrder = {
            date: new Date(),
            buyer: { email, name, number },
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
        return <h2 className="vacio"> ¡Gracias! Este es el Id de tu orden de compra: {orderId}
                    <Link to="/" className="link"> - Regresar al inicio </Link></h2>
    }
    return (
        <>
            {cart.length === 0 ? (
                <>
                    <h2 className="vacio"> Aún no hay productos :( volvé al
                    <Link to="/" className="link"> Inicio </Link>
                    </h2>
                </>
            ) : (
                <>
                    <div className="container cart">
                        
                        <div >
                            {cart.map((producto) => (
                                <CartDetail
                                    
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))}

                            <p className="total"> Total: $ {totalCart()} </p>
                            <button onClick={vaciarCarrito} className="emplty-cart">Vaciar carrito</button>

                        </div>

                        <div >

                            <h2 className="form">
                                Finalizá tu compra completando el formulario
                            </h2>

                            <form className="form2" onSubmit={handleSubmit} action="">

                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    placeholder="Nombre"
                                />

                                <input
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastname}
                                    type="text"
                                    placeholder="Apellido"
                                />  

                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    placeholder="Email"
                                />

                                <input
                                    onChange={(e) => setNumber(e.target.value)}
                                    value={number}
                                    type="text"
                                    placeholder="WhatsApp"
                                />

                                <button disabled={(name === '') | (email === '')} className="checkout">
                                    {loading
                                        ? 'Generando orden....'
                                        : 'Finalizar compra'} 
                                </button>
                            </form>
                        </div>
                    </div>

                </>
            )}
        </>
    );
};

export default Cart;


