import React, { useState, useEffect } from 'react';
import Item from './Item';
import item from './products';


const ItemDetailContainer = () => {
    const [displayItems, setDisplayItems] = useState([]);


    useEffect(() => {
        const getItems = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(item)
                }, 2000)
            }

            )
        }

        getItems().then(result => setDisplayItems(result))
    }, [ItemDetailContainer])
    return (
        <div className="counteiner">{displayItems.map((elem) => <Item id={elem.id} item={elem} />
        )}</div>
    )
}

export default ItemDetailContainer;