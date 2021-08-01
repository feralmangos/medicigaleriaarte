import React, { useContext,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../services/Context';
import CartItem from './CartItem';






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
    const TotalCarrito=()=>{
        return carrito.reduce((acc,prod)=>acc+(prod.item.price*prod.item.quantity),0)
    }
    const TotalQ=()=>{
        return carrito.reduce((acc,prod)=>acc+(prod.item.quantity),0)
    }
   if (carrito.length){
    return (

        <>{
        <div>
        <div className="detailOfPurchase">
            {carrito.map(elem => <CartItem value={elem.item.id} title={elem.item.title} quantity={elem.item.quantity} price={elem.item.price}/> )}
        </div>
        <p>Total:{TotalCarrito()}$</p>
        <p>Cantidad de Items en Carrito: {TotalQ()}</p>
        <button onClick={clearCart}> Erase items</button>
        </div>}
        </>)

   } else {
        return(
            <Link to="/"><h1>Back to buy stuff</h1> </Link>
        )
   }
    
}


export default Cart;