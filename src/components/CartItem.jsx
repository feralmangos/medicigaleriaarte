import React,{useContext} from 'react';
import { Context } from '../services/Context';


const CartItem = (props) =>{
    

    const {removeFromCart } = useContext(Context)

    const handleRemove =()=>{
        removeFromCart(props.value)}
    


    console.log(props)


    return(
   <div id={props.value} >
      <p>item: {props.title}</p>
      <p>quantity: {props.quantity}</p>
      <p>price: {props.price}</p>
      
      <p>subtotal: {props.price*props.quantity} $</p>
      <button onClick={handleRemove}>delete</button>



   </div>
    )
}

export default CartItem;