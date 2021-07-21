import React from "react";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';


const NavBar = (props) =>{
    return (
        <nav>
            <h1>ART GALLERY</h1>
            <ul onClick={props.workInProgress}>
                <Link to="/">
                <li>ShowRoom</li>
                </Link>         
            </ul>
            <CartWidget {...props}/>
            
        </nav>
    )
}

export default NavBar;