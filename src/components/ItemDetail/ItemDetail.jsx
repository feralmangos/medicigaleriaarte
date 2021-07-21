import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";




const ItemDetail=()=>{
    const [displayItem, setDisplayItem] = useState([]);
    const {id} = useParams();
    const tempId = id;
    console.log("this is id" +id)
    const item = [
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
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item)
            }, 2000)
        }

        )
    }
    console.log("this is "+displayItem);
    useEffect(()=>{
        console.log("this is item"+item[id-1].id);
        console.log(item.id);
        setDisplayItem(item[id-1])},[tempId])

return(
    <div className='Items'>
        <p>Id: {displayItem.id}</p>
        <p>Precio: {displayItem.price}</p>
        <p>Título: {displayItem.title}</p>
        <p>Description: {displayItem.description}</p>
        <img src={""+displayItem.pictureUrl +""} alt="" />
    </div>
)
}

export default ItemDetail;