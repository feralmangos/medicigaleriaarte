import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../services/Context';

const Cart2 = () => {
    const { cart } = useContext(Context)
    const [carrito, setCarrito] = useState([]);
    useEffect(() => {

    }, [cart])

    useEffect(() => {
        setCarrito(cart)
        carrito.map(elem => console.log("loop" + elem.item.id))
    }, [cart, carrito])

    const TotalQ = () => {
        return carrito.reduce((acc, prod) => acc + (prod.item.quantity), 0)
    }

    return (
        <div className="cart2">
                      <p>{TotalQ()}</p>
        </div>)
}


export default Cart2;