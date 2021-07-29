import React, { useContext,useState,useEffect } from 'react';
import { Context } from '../services/Context';






const Cart = () => {
    const { cart, clearCart,removeFromCart } = useContext(Context)
    const [carrito,setCarrito]= useState([]);
    useEffect(()=>{

    },[cart])
    
    useEffect(()=>{
        setCarrito(cart)
        console.log("this is effect carrito"+carrito)
        carrito.map(elem=>console.log("loop"+elem.item.id))
    })
   
    return (
        <>
        <div>
            {carrito.map(elem => <span><h1>{elem.item.title}: quantity {elem.item.quantity}</h1></span>)}
        </div>
        <button onClick={clearCart}> Erase items</button>
        </>)
}


export default Cart;