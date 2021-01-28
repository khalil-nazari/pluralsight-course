import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
    const myStyle = {
        color: 'orange'
    }

    return (
        <nav>
            <NavLink activeStyle={myStyle} to="/" exact>Home</NavLink>
            {" | "}
            <NavLink activeStyle={myStyle} to="/about" exact>About</NavLink>
        </nav>
    )
}

export default Header
