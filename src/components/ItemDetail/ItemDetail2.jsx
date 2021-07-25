import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Detail from './Detail'




const ItemDetail2 = () => {
    const [displayItem, setDisplayItem] = useState([]);
    const { id } = useParams();
    const [counter,setCounter]=useState([]);


    
    const item = [
        {
            id: 1,
            title: 'le morfs',
            description: 'very old painting',
            price: '112$',
            pictureUrl: 'https://media.npr.org/assets/news/2010/07/23/ronan_custom-fc9afd0b711c4f73b6379b9847248bff2fbdb837-s200-c85.jpg',
            category:'animals'
        }, {
            id: 2,
            title: 'le pins',
            description: 'very new painting',
            price: '312$',
            pictureUrl: 'https://d7hftxdivxxvm.cloudfront.net?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FHhkVwNOa5qSAgQmgGzcRIw%252Fcharlie%2B%2526%2Bsheba.jpg&width=1200&quality=80',
            category:'animals'

        },
        {
            id: 3,
            title: 'le mel',
            description: 'painting',
            price: 'free',
            pictureUrl: 'https://slackershack.files.wordpress.com/2020/12/mel-g.jpg',
            category:'famous'

        }

    ];

    useEffect(() => {
        console.log("this is the id " + id)
        const getItem = () => {
            setDisplayItem(item)
        }
        setCounter(id);
        console.log("This is Counter " + counter)
        
        getItem()
    },[ItemDetail2])

    return (

        <div className="counteiner">{displayItem.filter(item => item.id == 1).map((elem) => <Detail id={elem.id} item={elem} />
        
        )}</div>
    )
}

export default ItemDetail2;