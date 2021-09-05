import React from 'react';
import { Link } from 'react-router-dom';




const ItemDetail = ({ item }) => {

    if (item){
    return (
        
            <div className='Items'>
                <p>Título: {item.title}</p>
                <img src={"" + item.pictureUrl + ""} alt="" />
                <Link key={item.id} to={"/item/"+item.id}>
                <button>Ver Detalle</button>
                </Link>
            </div>
        
    )}else{
        return(
            <img src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" alt="loading"/>
        )
    }
}

export default ItemDetail;