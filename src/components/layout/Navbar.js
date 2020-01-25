import React from 'react';  // rfc rfe other: fsc
import { Link } from 'react-router-dom';  // imwr
import NavbarLinks from './NavbarLinks'  // imp imst

// const Navbar = () => {  // nfn
function Navbar(props) {
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
                <dev className="container">
                    <Link to='/' className="brand-logo"><i class="material-icons"></i>PokeX Search</Link>
                    <NavbarLinks />
                </dev>
            </nav>
        </div>
    );
}

export default Navbar