import React,{useContext, useState} from 'react';
import { Context } from '../../services/Context';






const Detail = ({ item }) => {

   const {addToCart,cart}= useContext(Context)  
   console.log("this is context " ,Context)
   console.log("this is cart", cart)  
   const [add, addOn] = useState(1);
   const [subs, setSub] = useState(item.stock);
   const [load,setLoad] =useState(false)

   const handleAgregar = ()=>{
            item.quantity=add;
            addToCart({item})
            console.log("this are units",item.units)
            setLoad(!load)
            
}
if (!load){ return (



    <div className='Items'>
        <p>Título: {item.title}</p>
        <p>Description:{item.description}</p>
        <p>Precio:{item.price}</p>
        <img src={"" + item.pictureUrl + ""} alt="" />
        <div className="counteiner">
        
        <p>Stock: {subs}</p>
        <p>Units: {add}</p>
        <button onClick={() => {
            if (subs >= 0 & subs < item.stock) {
                addOn(add - 1);
                setSub(subs + 1)
            } else {
                alert("Cero Units to buy isn't allowed")
            }
        }}>-</button>
        
        <button onClick={
            () => {
                if (subs) {
                    addOn(add + 1);
                    setSub(subs - 1)
                }
                else {
                    alert("Out of Stock")
                }
            }
        }>+</button>
    </div>
        
         
            <button onClick={handleAgregar}>Comprar</button>
        

    </div>

)} else {
    return (



        <div className='Items'>
            <p>Título: {item.title}</p>
            <p>Description:{item.description}</p>
            <p>Precio:{item.price}</p>
            <img src={"" + item.pictureUrl + ""} alt="" />
            <h3>Agregado al carrito </h3>
            
            
            
            
    
        </div>
    
    )
}
    
   
}

export default Detail;