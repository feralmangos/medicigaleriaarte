import React, { createContext, useState } from "react";

export const Context = createContext();

export const DataProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isntInCart = (receivedItem) => cart.filter(elem => elem.item.id === receivedItem.item.id).length === 0

   const addToCart = (receivedItem) => {
       

        isntInCart(receivedItem) ? setCart([...cart, receivedItem]) : alert("already in car")
   }
    //const addToCart = receivedItem => setCart([...cart, receivedItem])

   const removeFromCart = (id) => {
      console.log("this is id of item" + id)  
        let killItem =cart.filter(elem=>{
            console.log("this is title"+elem.item.id)
            return elem.item.id!=id})
        console.log(killItem)
        setCart(killItem)
    }

    const clearCart =()=>setCart([])

    return(
        <Context.Provider value={{cart,setCart,addToCart,removeFromCart,clearCart}}>
            {children}
        </Context.Provider>
    )
}


