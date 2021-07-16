import React from "react";
import CartWidget from "./CartWidget";

const NavBar = (props) =>{
    return (
        <nav>
            <h1>ART GALLERY</h1>
            <ul onClick={props.workInProgress}>
                <li>Home</li>
                <li>ShowRoom</li>
                <li>Contact</li>
                <li>User Profile</li>
            </ul>
            <CartWidget {...props}/>
            
        </nav>
    )
}

export default NavBar;