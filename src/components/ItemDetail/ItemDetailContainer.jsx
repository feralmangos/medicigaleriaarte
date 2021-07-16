import React, { useState } from 'react';
import Item from './ItemDetail';


const ItemDetailContainer = () => {
    const [displayItems, setDisplayItems] = useState([]);
    const itemsArray = [
        {
            id: 1,
            title: 'le morfs',
            description: 'very old painting',
            price: '112$',
            pictureUrl: 'https://media.npr.org/assets/news/2010/07/23/ronan_custom-fc9afd0b711c4f73b6379b9847248bff2fbdb837-s200-c85.jpg'
        },
      
    ];
    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemsArray)
            }, 2000)
        }

        )
    }
    getItems().then(result=>setDisplayItems(result))
    return (
        <div className="counteiner">{displayItems.map((elem)=><Item item={elem}/>
        )}</div>
    )
}

export default ItemDetailContainer;