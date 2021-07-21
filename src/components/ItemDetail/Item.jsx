import React from 'react';
import { Link } from 'react-router-dom';




const ItemDetail = ({ item }) => {
    return (
        
            <div className='Items'>
                <p>Título: {item.title}</p>
                <img src={"" + item.pictureUrl + ""} alt="" />
                <Link key={item.id} to={"item/"+item.id}>
                <button>Ver Detalle</button>
                </Link>
            </div>
        
    )
}

export default ItemDetail;