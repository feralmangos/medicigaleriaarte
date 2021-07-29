import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Detail from './Detail';
import item from './products';



const ItemDetail = () => {
    const [ displayItem, setDisplayItem ] = useState([]);
    const { id } = useParams();
    const [ counter,setCounter ]=useState([]);

  


    useEffect(() => {
        console.log("this is the id " + id)
        const getItem = () => {
            setDisplayItem(item)
        }
        setCounter(id);
        console.log("This is Counter " + counter)
        
        getItem()
    },[ItemDetail])

    return (

        <div className="counteiner">{displayItem.filter(item => item.id == (id)).map((elem) => <Detail id={elem.id} item={elem} />
        
        
        )}</div>
    )
}

export default ItemDetail;