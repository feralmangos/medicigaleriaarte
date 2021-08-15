import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../services/Context';
import CartItem from './CartItem';
import { database } from './ItemDetail/firebase';


const Cart = () => {
    const { cart, clearCart } = useContext(Context)
    const [carrito, setCarrito] = useState([]);
    const addComment = (ev) => {
        ev.preventDefault();
        //Creo un objeto que va a ser el comentario
        carrito.forEach(elem => {

            const newComment = {
                buyer: {
                    name: ev.target.nombre.value,
                    tel: ev.target.tel.value,
                    mail: ev.target.email.value,
                    datetime: new Date().toString(),
                    quantity: elem.item.quantity,
                },
                item: {
                    title: elem.item.title,
                    itemId: elem.item.id,
                    price: elem.item.price
                }
            };
            console.log(elem.item.title)

            //Establezco la referencia a la colección de firebase
            const remoteComments = database.collection("carro");
            const arte2 = database.collection("arte2").doc(elem.item.id);
            console.log("this is the prod" + arte2)
            console.log( arte2.id)
            const newStock = elem.item.stock- elem.item.quantity;
           arte2.update({
                "stock":newStock
            }).then((()=>{
                clearCart();
                return alert("stock Updated")}))

            
            remoteComments
                .add(newComment)
                .then((res) => alert("COMPRA AÑADIDA CON ÉXITO"))
                .catch((err) => alert("ERROR: ", err))
        })

    };

    useEffect(() => {

    }, [cart])

    useEffect(() => {
        setCarrito(cart)
        console.log("this is effect carrito" + carrito)
        carrito.map(elem => console.log("loop" + elem.item.id))
    }, [cart, carrito])
    const TotalCarrito = () => {
        return carrito.reduce((acc, prod) => acc + (prod.item.price * prod.item.quantity), 0)
    }
    const TotalQ = () => {
        return carrito.reduce((acc, prod) => acc + (prod.item.quantity), 0)
    }
    if (carrito.length) {
        return (

            <>{
                <div>
                    <div className="detailOfPurchase">
                        {carrito.map(elem => <CartItem value={elem.item.id} title={elem.item.title} quantity={elem.item.quantity} price={elem.item.price} />)}
                    </div>
                    <p>Total:{TotalCarrito()}$</p>
                    <p>Cantidad de Items en Carrito: {TotalQ()}</p>
                    <button onClick={clearCart}> Erase items</button>
                    <form onSubmit={addComment}>
                        <h3>Nuevo comentario:</h3>
                        <input type="text" id="nombre" placeholder="Tu nombre:" required />
                        <input type="text" id="tel" placeholder="Tu cel:" required />

                        <input type="text" id="email" placeholder="Tu meil:" required />


                        <button type="submit">comprar</button>
                    </form>
                </div>}
            </>)

    } else {
        return (
            <Link to="/"><h1>Back to buy stuff</h1> </Link>
        )
    }

}


export default Cart;