import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
return(
    <div className="allitems">
        <ItemCount units={0} stocks={7}/>
        <ItemCount units={0} stocks={5}/>
        <ItemCount units={0} stocks={15}/>
        <ItemCount units={0} stocks={2}/>
        <ItemCount units={0} stocks={8}/>
    </div>
)
}

export default ItemListContainer;