import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    return (
        <div>
            <div className="allitems">
                <ItemCount units={0} stocks={7} />
                <ItemCount units={0} stocks={5} />
                <ItemCount units={0} stocks={15} />
                <ItemCount units={0} stocks={2} />
                <ItemCount units={0} stocks={8} />
            </div>
            <ItemList />
        </div>
    )
}

export default ItemListContainer;