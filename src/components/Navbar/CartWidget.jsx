import React from "react";
import Cart2 from "../Cart2";

const CartWidget = (props) => {
    return (
        <><div onClick={props.workInProgress}>
            <img src='https://i.pinimg.com/originals/14/64/53/146453abcd0d77e10444895668151bd0.png' alt="Cart logo" className="cart" />
            <Cart2/>
        </div>
        </>
    )
}

export default CartWidget;