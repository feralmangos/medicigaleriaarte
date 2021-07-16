import React, { useState } from 'react';


const ItemCount = (props) => {
    const [add, addOn] = useState(props.units);
    const [subs, setSub] = useState(props.stocks)


    return (
        <div className="counteiner">
            <p>Item</p>
            <button onClick={() => {
                if (subs >= 0 & subs < props.stocks) {
                    addOn(add - 1);
                    setSub(subs + 1)
                } else {
                    alert("Empty Units")
                }
            }}>-</button>
            <p>Stock: {subs}</p>
            <p>Units: {add}</p>
            <button onClick={
                () => {
                    if (subs) {
                        addOn(add + 1);
                        setSub(subs - 1)
                    }
                    else {
                        alert("Out of Stock")
                    }
                }
            }>+</button>
        </div>

    )

}

export default ItemCount;