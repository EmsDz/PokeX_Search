import React from 'react';  // rfc rfe other: fsc
// import { Link } from 'react-router-dom';  // imwr
import NavbarLinks from './NavbarLinks'  // imp imst

// const Navbar = () => {  // nfn
function Navbar(props) {
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <NavbarLinks />
                </div>
            </nav>
        </div>
    );
}

export default Navbar