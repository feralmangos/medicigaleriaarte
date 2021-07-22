import React from "react";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    return (
        <nav>
            <Link to="/">
                <h1>ART GALLERY</h1>
            </Link>

            <ul onClick={props.workInProgress}>
                <Link to="/category">
                    <li>Catálogo</li>
                </Link>
            </ul>
            <CartWidget {...props} />

        </nav>
    )
}

export default NavBar;