import React from 'react'
import Navbar from "../layout/Navbar";
import "../../App.css";


const Home = () => {
    return (
        <div className="">
            <Navbar />
            <header className="App-header">
                {/* <img src={process.env.PUBLIC_URL + '../pok01.png'} alt='pokeImg' /> */}
                <h1>Cincinnatus  MiniProyect</h1>
            </header>
        </div>
    )
}

export default Home
