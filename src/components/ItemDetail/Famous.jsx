import React, { useState, useEffect } from 'react';
import Item from './Item';
import item from './products';


const ItemDetailContainer = (props) => {
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

        getItems().then(result => setDisplayItems(result.filter((x) => x.category === props.cat)))
    }, [props.cat])
    return (
        <div className="counteiner">{displayItems
            .map((elem) =>
                <Item id={elem.id} item={elem} />
            )}</div>
    )
}

export default ItemDetailContainer;