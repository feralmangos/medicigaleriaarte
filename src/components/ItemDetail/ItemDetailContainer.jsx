import React, { useState, useEffect } from 'react';
import Item from './Item';
import item from './products';
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

    }, [ItemDetailContainer])
    return (
        <div className="counteiner">{displayItems.map((elem) => <Item id={elem.id} item={elem} />
        )}</div>
    )
}

export default ItemDetailContainer;