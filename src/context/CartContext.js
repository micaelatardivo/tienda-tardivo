import { createContext, useState } from "react";

export const CartContext = createContext ([]);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    

    //agregar items al carrito

    const addToCart = (cantidad, item) => {
        isOnCart(item.id)
            ? sumarCantidad(cantidad, item)
            : setCart([...cart, { ...item, cantidad }]);
    };
    

    //si esta en el carrito
    
    const isOnCart = (id) => {
        const respuesta = cart.some ((prod) => prod.id === id) ;
        return respuesta;
    
    };

    //sumar la cantidad

    const sumarCantidad = (cantidad, item) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    cantidad: cantidad + prod.cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };

    //vaciar carrito

    const vaciarCarrito = () => {
        setCart([]);
    };    

    //eliminar por item

    const deleteItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id));
    };

    //sumar total del carrito

    const totalCart = () => {
        return cart.reduce((prev, curr) => prev + curr.cantidad * curr.price, 0);
    };
   
    //sumar la cantidad de unidades del carrito

    const totalUnidades = () => {
        return cart.reduce((prev, curr) => prev + curr.cantidad, null);
    };

    return ( 
            <CartContext.Provider 
            value={{ 
                        cart,
                        addToCart,
                        vaciarCarrito,
                        deleteItem,
                        totalCart,
                        totalUnidades,}}>
            {children}
            </CartContext.Provider>
    );
};

export default CartContextProvider;
