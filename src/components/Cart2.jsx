import React, { useContext,useState,useEffect } from 'react';
import { Context } from '../services/Context';






const Cart2 = () => {
    const { cart, clearCart,removeFromCart } = useContext(Context)
    const [carrito,setCarrito]= useState([]);
    useEffect(()=>{

    },[cart])
    
    useEffect(()=>{
        setCarrito(cart)
        console.log("this is effect carrito"+carrito)
        carrito.map(elem=>console.log("loop"+elem.item.id))
    })
    const TotalCarrito=()=>{
        return carrito.reduce((acc,prod)=>acc+(prod.item.price*prod.item.quantity),0)
    }
    const TotalQ=()=>{
        return carrito.reduce((acc,prod)=>acc+(prod.item.quantity),0)
    }
   
    return (
        <div className="cart2">
        
        <p>Total:{TotalCarrito()}$</p>
        <p>Cantidad de Items en Carrito: {TotalQ()}</p>
        
        </div>)
}


export default Cart2;