import React from 'react';  // imr
import { Link, NavLink } from 'react-router-dom';  // imnl
// import Search from './NavSearch'

const NavbarLinks = (params) => {
    return (
        <div>
            <Link to='/' className="brand-logo"><i className="material-icons"></i>PokeX Search</Link>
            <ul className="right">
                {/* <li><NavLink to="/search">Search</NavLink></li> */}
                <li><NavLink to="/pokelist">Pokemons</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
        </div>
    )
}

export default NavbarLinks;