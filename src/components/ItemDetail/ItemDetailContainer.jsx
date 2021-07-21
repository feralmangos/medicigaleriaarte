import React, { useState, useEffect } from 'react';
import Item from './Item';


const ItemDetailContainer = () => {
    const [displayItems, setDisplayItems] = useState([]);
    const itemsArray = [
        {
            id: 1,
            title: 'le morfs',
            description: 'very old painting',
            price: '112$',
            pictureUrl: 'https://media.npr.org/assets/news/2010/07/23/ronan_custom-fc9afd0b711c4f73b6379b9847248bff2fbdb837-s200-c85.jpg'
        },{
            id: 2,
            title: 'le pins',
            description: 'very new painting',
            price: '312$',
            pictureUrl: 'https://d7hftxdivxxvm.cloudfront.net?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FHhkVwNOa5qSAgQmgGzcRIw%252Fcharlie%2B%2526%2Bsheba.jpg&width=1200&quality=80'
        },
        {
            id: 3,
            title: 'le mel',
            description: 'painting',
            price: 'free',
            pictureUrl: 'https://slackershack.files.wordpress.com/2020/12/mel-g.jpg'
        }
      
    ];
    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemsArray)
            }, 2000)
        }

        )
    }
    useEffect(()=>getItems().then(result=>setDisplayItems(result)),[ItemDetailContainer])
    return (
        <div className="counteiner">{displayItems.map((elem)=><Item id={elem.id} item={elem}/>
        )}</div>
    )
}

export default ItemDetailContainer;