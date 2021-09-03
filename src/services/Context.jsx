import React, { createContext, useState } from "react";

export const Context = createContext();

export const DataProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isntInCart = (receivedItem) => cart.filter(elem => elem.item.id === receivedItem.item.id).length === 0

    const addToCart = (receivedItem) => {
        isntInCart(receivedItem) ? setCart([...cart, receivedItem]) : alert("already in car")
    }

    const removeFromCart = (id) => {
        let killItem = cart.filter(elem => {
            return elem.item.id !== id.toString()
        })
        setCart(killItem)
    }

    const clearCart = () => setCart([])

    return (
        <Context.Provider value={{ cart, setCart, addToCart, removeFromCart, clearCart, isntInCart }}>
            {children}
        </Context.Provider>
    )
}


