import React from 'react';




const Detail = ({ item }) => {
    
    
    return (
    
        
            <div className='Items'>
                <p>Título: {item.title}</p>
                <p>Description:{item.description}</p>
                <p>Precio:{item.price}</p>
                <img src={"" + item.pictureUrl + ""} alt="" />
                
            </div>
        
    )
}

export default Detail;