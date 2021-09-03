import React, { useState, useEffect } from 'react';
import Item from './Item';
import { database } from './firebase';

const ItemDetailContainer = (props) => {
    const [displayItems, setDisplayItems] = useState([]);
    const getArt = () => {
        const art = database.collection("arte2")
        const art2 = art.where('category', '==', props.cat)
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
            },
            )
        }
        getItems().then(result => setDisplayItems(result.filter((x) => {
            return x.category === props.cat
        })
        ))
    })
    if (displayItems.length) {
        return (
            <div className="counteiner">{displayItems
                .map((elem) =>
                    <Item key={elem.id} id={elem.id} item={elem} />
                )}</div>
        )
    } else{
        return(
            <img className="loading" src="http://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif" alt="loading"/>
        )
    }
}

export default ItemDetailContainer;