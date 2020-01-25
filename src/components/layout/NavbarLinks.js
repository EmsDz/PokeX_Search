import React from 'react';  // imr
import { NavLink } from 'react-router-dom';  // imnl

const NavbarLinks = (params) => {
    return (
        <ul className="right">
            <li><NavLink to="/">some stuff</NavLink></li>
            <li><NavLink to="/">some stuff</NavLink></li>
        </ul>
    )
}

export default NavbarLinks;