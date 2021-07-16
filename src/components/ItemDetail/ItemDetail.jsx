import React from 'react';



const ItemDetail=({item})=>{
return(
    <div className='Items'>
        <p>Id: {item.id}</p>
        <p>Precio: {item.price}</p>
        <p>Título: {item.title}</p>
        <p>Description: {item.description}</p>
        <img src={""+item.pictureUrl +""} alt="" />
    </div>
)
}

export default ItemDetail;