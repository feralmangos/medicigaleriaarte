import React from "react";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    return (
        <nav>
            <Link to="/">
                <h1>ART GALLERY</h1>
            </Link>

            <ul >
                <Link to="/famous">
                    <li>famosos</li>
                </Link>
            </ul>
            <ul >
                <Link to="/animals">
                    <li>animales</li>
                </Link>
            </ul>
            
            <Link to="/cart">
                <CartWidget {...props} />
            </Link>


        </nav>
    )
}

export default NavBar;