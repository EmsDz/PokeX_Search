import React from 'react'
import "../../App.css"
import Navbar from "../layout/Navbar";

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <h1>PokeX Search Info</h1>
            <div className="container cont">
                <p>This is an application for view pokemon information like card.</p>
                <p>Developer by Esmarlyn Diaz a novice react developer.</p>
            </div>
        </div>
    )
}

export default AboutUs
