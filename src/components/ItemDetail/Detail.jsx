import React from 'react';
import ItemCount from '../OldComponents/ItemCount';
import { Link } from 'react-router-dom';





const Detail = ({ item }) => {

    


    return (


        <div className='Items'>
            <p>Título: {item.title}</p>
            <p>Description:{item.description}</p>
            <p>Precio:{item.price}</p>
            <img src={"" + item.pictureUrl + ""} alt="" />
            <ItemCount units={item.units} stocks={item.stock} />
            <Link to="/cart">
                <button>Terminar Compra</button>
            </Link>

        </div>

    )
}

export default Detail;