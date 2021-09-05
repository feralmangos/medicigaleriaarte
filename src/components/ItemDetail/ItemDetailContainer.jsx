import React, { useState, useEffect } from 'react';
import Item from './Item';
import { database } from './firebase';


const ItemDetailContainer = () => {
    const [displayItems, setDisplayItems] = useState([]);
    const getArt = () => {
        const art = database.collection("arte2")

        art.get().then((query) => {
            setDisplayItems(
                query.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            )
        })
    }


    useEffect(() => {
        getArt();

    }) 

    if (displayItems.length){
    return (
        <div className="counteiner">{displayItems.map((elem) => <Item key={elem.id} id={elem.id} item={elem} />
        )}</div>
    )} else{
        return(
        <img src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" alt="loading"/>
         ) }
}

export default ItemDetailContainer;