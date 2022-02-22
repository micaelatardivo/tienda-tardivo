import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //agregar items al carrito

    const addToCart = (cantidad, item) => {
        //console.log (cantidad, item);

        if (isOnCart(item.id)) {
            alert('Ya esta en el carrito')

        } else {
            setCart([...cart, {...item, cantidad}]);
        }
        
    };

    //si esta en el carrito
    
    const isOnCart = (id) => {
        const respuesta = cart.some ((prod) => prod.id === id) ;
        return respuesta;
    
    };

    //vaciar carrito

    const vaciarCarrito = () => {
        setCart([]);
    };

    console.log (cart)

    return ( 
            <CartContext.Provider value={{ cart, addToCart, vaciarCarrito}}>
                {children}
            </CartContext.Provider>
    );
};

export default CartContextProvider
