import React, { useState, useEffect } from 'react';
import Item from './Item';
import { database } from './firebase';
import { useParams } from "react-router-dom";


const Catalogues = () => {
    const [displayItems, setDisplayItems] = useState([]);
    const { ids } = useParams();
    
   
    
    useEffect((getItems) => {
        const getArt = () => {
            const art = database.collection("arte2")
    
            const art2 = art.where('category', '==', ids)
            art2.get().then((query) => {
                setDisplayItems(
                    query.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
        }    
        getArt(result => setDisplayItems(result.filter((x) => {
            return x.category === ids
        })
        ))
        
    },[displayItems,ids])
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

export default Catalogues;