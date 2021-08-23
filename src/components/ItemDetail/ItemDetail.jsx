import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Detail from './Detail';
import { database } from './firebase';




const ItemDetail = () => {
    const [ displayItem, setDisplayItem ] = useState([]);
    const { id } = useParams();
    const [ counter,setCounter ]=useState([]);
    
    const getArt =()=>{
        const art =database.collection("arte2")

        art.get().then((query)=>{
            setDisplayItem(
                query.docs.map((doc)=>{
                    return {...doc.data(),id:doc.id}
                })
            )
        })
    }
  


    useEffect(() => {
        console.log("this is the id " + id)
        const getItem = () => {
            getArt();
        }
        setCounter(id);
        console.log("This is Counter " + counter)
        
        getItem()
    },[counter,id]);

    return (

        <div className="counteiner">{displayItem.filter(item => item.id === (id)).map((elem) => <Detail id={elem.id} item={elem} />
        
        
        )}</div>
    )
}

export default ItemDetail;