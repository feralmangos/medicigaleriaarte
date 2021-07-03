import React from "react";


const CartWidget = (props) => {
    return (
        <><div onClick={props.workInProgress}>
            <img src='https://i.pinimg.com/originals/14/64/53/146453abcd0d77e10444895668151bd0.png' alt="Cart logo" className="cart" />
        </div>
        </>
    )
}

export default CartWidget;