import { createContext, useState } from "react";

export const CartContext = createContext ([]);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //agregar items al carrito

    const addToCart = (cantidad, item) => {
        //console.log (cantidad, item);

        if (isOnCart(item.id)) {
            //alert('Ya esta en el carrito')
            //sumar la cantidad
            sumarCantidad(cantidad, item)
        } else {
            setCart([...cart, {...item, cantidad}]);
        }
        
    };

    //si esta en el carrito
    
    const isOnCart = (id) => {
        const respuesta = cart.some ((prod) => prod.id === id) ;
        return respuesta;
    
    };

    //sumar la cantidad

    const sumarCantidad = (cantidad, item) => {
        const copia = [...cart]
        copia.forEach ((producto)=>{
            if (producto.id === item.id) {
                producto.cantidad += cantidad
            }
        })
    }

    //vaciar carrito

    const vaciarCarrito = () => {
        setCart([]);
    };

    console.log (cart)

    //eliminar por item

    const deleteItem = (id) => {
        setCart (cart.filter ((producto) => producto.id !== id))
    }

    //sumar total del carrito

    //sumar la cantidad de unidades del carrito

    return ( 
            <CartContext.Provider value={{ cart, addToCart, vaciarCarrito, deleteItem}}>
                 {children}
            </CartContext.Provider>
    );
};

export default CartContextProvider;
