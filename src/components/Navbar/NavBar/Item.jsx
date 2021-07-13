import React from 'react';



const Item=({item})=>{
return(
    <div className='Items'>
        <p>Id: {item.id}</p>
        <p>Precio: {item.price}</p>
        <p>Título: {item.title}</p>
        <p>description: {item.description}</p>
        <img src={""+item.pictureUrl +""} alt="" />
    </div>
)
}

export default Item;