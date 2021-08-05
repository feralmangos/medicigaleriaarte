import React, { useState, useEffect } from 'react';
import Item from './Item';
import item from './products';
import { database } from './firebase';


const ItemDetailContainer = (props) => {
    const [displayItems, setDisplayItems] = useState([]);

    const getArt = () => {
        const art = database.collection("arte2")
        const art2 = art.where('category','==',props.cat)

        art2.get().then((query) => {
            setDisplayItems(
                query.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            )
        })
    }


    useEffect(() => {
        const getItems = () => {
            return new Promise((resolve, reject) => {
                
                    getArt()
                
            }

            )
        }
        console.log(props.cat)


        getItems().then(result => setDisplayItems(result.filter((x) =>
            {   console.log(x.category)
                return x.category === props.cat})
        ))
    }, [props.cat])
    return (
        <div className="counteiner">{displayItems
            .map((elem) =>
                <Item id={elem.id} item={elem} />
            )}</div>
    )
}

export default ItemDetailContainer;